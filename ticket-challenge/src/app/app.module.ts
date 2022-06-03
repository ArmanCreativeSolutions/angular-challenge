import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanComponent } from './plan/plan.component';
import { SalonsListComponent } from './salons-list/salons-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {ApiUrlInterceptor} from "./core/interceptors/api-url.interceptor";

@NgModule({
    declarations: [AppComponent, PlanComponent, SalonsListComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiUrlInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
