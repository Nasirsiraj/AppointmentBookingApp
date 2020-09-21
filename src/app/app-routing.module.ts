import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AppointmentListComponent} from './components/appointment-list/appointment-list.component';
import {ErrorPageComponent} from './components/error-page/error-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'appointment-list', component: AppointmentListComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
