import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SeatMapService } from '../seat-map.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { SeatState } from '../models/seat-state';

const GRID = 15; // 15x15
const TOTAL_CELLS = GRID * GRID;

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  // Compact state: 0 = free, 1 = reserved
  private state = new Uint8Array(TOTAL_CELLS);

  private ctx!: CanvasRenderingContext2D;
  private dpr = 1;
  private resizeObserver?: ResizeObserver;
  private pendingFullRender = false;
  private destroyed = false;

  private imgFreeSeat = new Image();
  private imgReservedSeat = new Image();
  private imgSelectedSeat = new Image();

  constructor(
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private seatMapService: SeatMapService
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(take(1)).subscribe((params) => {
      const mapId = params.get('id');

      if (mapId) {
        const map = this.seatMapService.getSeatMap(mapId);
        this.state.set(map.flat());
      }
    });
  }

  ngAfterViewInit(): void {
    this.imgFreeSeat.src = 'assets/icon/free-seat.svg';
    this.imgReservedSeat.src = 'assets/icon/reserved-seat.svg';
    this.imgSelectedSeat.src = 'assets/icon/selected-seat.svg';

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Canvas 2D context not supported');
    }
    this.ctx = ctx;

    // Run non-Angular to avoid change detection
    this.ngZone.runOutsideAngular(() => {
      this.setupPointerHandler();
      this.setupResizeObserver();
      // initial sizing + draw
      this.onResize();
      this.imgFreeSeat.onload =
        this.imgReservedSeat.onload =
        this.imgSelectedSeat.onload =
          () => this.onResize(); // redraw once images are ready
    });
  }

  // ---------- Pointer handling ----------
  // Use a bound handler property so we can remove it on destroy
  private pointerHandler = (ev: PointerEvent) => {
    // handle only primary pointer
    if (ev.isPrimary === false) return;
    // compute row/col -> toggle state and redraw only that cell
    this.handlePointer(ev);
  };

  private setupPointerHandler() {
    const canvas = this.canvasRef.nativeElement;
    // Use pointerdown to support touch + mouse consistently
    canvas.addEventListener('pointerdown', this.pointerHandler, {
      passive: true,
    });
  }

  private handlePointer(ev: PointerEvent) {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();

    // Convert client coordinates to CSS (logical) canvas coordinates.
    // Because we call ctx.setTransform(dpr,0,0,dpr,0,0) when sizing,
    // canvas drawing coordinates are in CSS pixels and we can use CSS coords here.
    const xCss = ev.clientX - rect.left;
    const yCss = ev.clientY - rect.top;

    // cell size in CSS pixels
    const cellWidthCss = rect.width / GRID;
    const cellHeightCss = rect.height / GRID;

    // compute col & row (careful with edge cases when pointer is exactly at right/bottom edge)
    let col = Math.floor(xCss / cellWidthCss);
    let row = Math.floor(yCss / cellHeightCss);
    if (col < 0) col = 0;
    if (row < 0) row = 0;
    if (col >= GRID) col = GRID - 1;
    if (row >= GRID) row = GRID - 1;

    const idx = row * GRID + col;

    if (this.state[idx] !== SeatState.RESERVED) {
      this.state[idx] =
        this.state[idx] === SeatState.FREE
          ? SeatState.SELECTED
          : SeatState.FREE;

      // redraw only this cell
      this.drawCell(row, col);
    }
  }

  // ---------- Resizing & DPI ----------
  private setupResizeObserver() {
    const canvas = this.canvasRef.nativeElement;
    // Use ResizeObserver to track CSS size changes
    this.resizeObserver = new ResizeObserver(() => {
      this.requestFullRender();
    });
    this.resizeObserver.observe(canvas);
    // Also watch window resize to be safe
    window.addEventListener('resize', this.windowResizeHandler, {
      passive: true,
    });
  }

  private windowResizeHandler = () => {
    this.requestFullRender();
  };

  private requestFullRender() {
    if (this.destroyed) return;
    if (this.pendingFullRender) return;
    this.pendingFullRender = true;
    // Batch using requestAnimationFrame
    requestAnimationFrame(() => {
      this.pendingFullRender = false;
      this.onResize();
    });
  }

  private onResize() {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();

    // devicePixelRatio for crisp rendering
    this.dpr = Math.max(1, window.devicePixelRatio || 1);

    // set the canvas backing store size in device pixels
    const newWidth = Math.round(rect.width * this.dpr);
    const newHeight = Math.round(rect.height * this.dpr);

    // Avoid needless reallocation
    if (canvas.width !== newWidth || canvas.height !== newHeight) {
      canvas.width = newWidth;
      canvas.height = newHeight;
    }

    // Reset transform so we start known state, then scale such that one unit == 1 CSS px.
    // After this transform, drawing commands use CSS pixels (easier math).
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

    // Set crisp borders regardless of dpr
    this.ctx.lineWidth = 1 / this.dpr;
    this.fullRender();
  }

  // ---------- Rendering ----------
  // Full render draws fills for all cells and then gridlines on top
  private fullRender() {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const cssW = rect.width;
    const cssH = rect.height;

    // clear entire canvas (in CSS pixels; transform will scale)
    this.ctx.clearRect(0, 0, cssW, cssH);

    // draw all cells
    for (let row = 0; row < GRID; row++) {
      for (let col = 0; col < GRID; col++) {
        this.drawCellFill(row, col);
      }
    }
  }

  // Draws only a single cell (fill + border)
  private drawCell(row: number, col: number) {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const cssW = rect.width;
    const cssH = rect.height;

    // compute cell geometry in CSS pixels
    const cellW = cssW / GRID;
    const cellH = cssH / GRID;

    const x = col * cellW;
    const y = row * cellH;

    // clear the area occupied by the cell (and a 1px extra margin for border)
    // Because ctx transform maps CSS to device pixels, this clearRect is crisp.
    this.ctx.clearRect(x - 1, y - 1, cellW + 2, cellH + 2);

    // fill the cell based on state
    this.drawCellFill(row, col);
  }

  private drawCellFill(row: number, col: number) {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const cssW = rect.width;
    const cssH = rect.height;

    const cellW = cssW / GRID;
    const cellH = cssH / GRID;

    const x = col * cellW;
    const y = row * cellH;

    const idx = row * GRID + col;

    // fill style
    const cellState = this.state[idx] as SeatState;
    let img: HTMLImageElement;
    const imageMap: Record<SeatState, HTMLImageElement> = {
      [SeatState.FREE]: this.imgFreeSeat,
      [SeatState.RESERVED]: this.imgReservedSeat,
      [SeatState.SELECTED]: this.imgSelectedSeat,
    };
    img = imageMap[cellState];
    this.ctx.drawImage(img, x, y, cellW, cellH);
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    // Disconnect observer and handlers
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = undefined;
    }
    const canvas = this.canvasRef?.nativeElement;
    if (canvas) {
      canvas.removeEventListener('pointerdown', this.pointerHandler);
    }
  }
}
