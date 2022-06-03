import { Component, OnInit } from '@angular/core';
import {MapItemResponseModel} from "../../shared/api/map.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  // @ts-ignore
  public plan: MapItemResponseModel;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.plan = this.route.snapshot.data['data'] as MapItemResponseModel;
  }

  public checkSeat(seatEl: HTMLElement, rowIndex: number, seatIndex: number) {
    const seatObj = this.plan.rows[rowIndex].seats[seatIndex];
    if (seatObj.disabled) {
      alert('You can not reserve this seat.');
      return;
    }
    if (seatObj.reserved) {
      alert('This seat is reserved.');
      return;
    }
    if (seatObj.taken) {
      alert('This seat is already taken!');
      return;
    }
    if (seatEl.classList.contains('selected-seat')) {
      seatEl.classList.remove('selected-seat');
      this.plan.rows[rowIndex].seats[seatIndex].isReservingByUser = false;
      return;
    }
    // must be placed in the response of ajax call which reserved the seat.
    seatEl.classList.add('selected-seat');
    this.plan.rows[rowIndex].seats[seatIndex].isReservingByUser = true;
  }

  selectRandom() {
    let allSeats: any = [];
    this.plan.rows.forEach((row, rowIndex) => {
      row.seats.forEach((seat, seatIndex) => {
        if (!seat.disabled && !seat.taken && !seat.reserved && !seat.isReservingByUser) {
          const seatClone: any = {...seat};
          seatClone.rowIndex = rowIndex;
          seatClone.seatIndex = seatIndex;
          allSeats.push(seatClone);
        }
      })
    });
    const randomSeat = allSeats[Math.floor(Math.random() * allSeats.length)];

    this.checkSeat(document.getElementById(`seat-${randomSeat.rowIndex}-${randomSeat.seatIndex}`) as HTMLElement,randomSeat.rowIndex ,randomSeat.seatIndex);
  }
}
