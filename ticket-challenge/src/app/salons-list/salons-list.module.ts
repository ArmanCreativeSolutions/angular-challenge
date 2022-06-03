import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalonsListRoutingModule } from './salons-list-routing.module';
import {SalonsListComponent} from "./salons-list.component";
import {PlanComponent} from "./plan/plan.component";
import {MapService} from "../shared/api/map.service";
import {PlanResolver} from "./plan/plan.resolver";

@NgModule({
  declarations: [
    SalonsListComponent,
    PlanComponent
  ],
  imports: [
    CommonModule,
    SalonsListRoutingModule
  ],
  providers: [
    MapService,
    PlanResolver
  ]
})
export class SalonsListModule { }
