import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SalonsListComponent} from "./salons-list.component";
import {PlanComponent} from "./plan/plan.component";
import {PlanResolver} from "./plan/plan.resolver";

const routes: Routes = [
  {
    path: '',
    component: SalonsListComponent
  },
  {
    path: ':id',
    resolve: {
      data: PlanResolver
    },
    component: PlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalonsListRoutingModule { }
