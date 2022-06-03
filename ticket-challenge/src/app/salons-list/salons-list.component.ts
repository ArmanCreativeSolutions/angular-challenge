import { Component, OnInit } from '@angular/core';
import {MapResponseModel, MapService} from "../shared/api/map.service";

@Component({
  selector: 'app-salons-list',
  templateUrl: './salons-list.component.html',
  styleUrls: ['./salons-list.component.scss']
})
export class SalonsListComponent implements OnInit {
  public salons: MapResponseModel[] | undefined;

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.mapService.list().subscribe((res) => {
      this.salons = res;
    });
  }

}
