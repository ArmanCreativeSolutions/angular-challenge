import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonsListComponent } from './salons-list.component';

describe('SalonsListComponent', () => {
  let component: SalonsListComponent;
  let fixture: ComponentFixture<SalonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
