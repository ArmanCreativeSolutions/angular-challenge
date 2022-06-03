import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'salons',
    pathMatch: 'full'
  },
  {
    path: 'salons',
    loadChildren: () => import('./salons-list/salons-list.module').then((m) => m.SalonsListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
