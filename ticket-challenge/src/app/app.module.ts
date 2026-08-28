import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanComponent } from './plan/plan.component';
import { SalonsListComponent } from './salons-list/salons-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, PlanComponent, SalonsListComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
