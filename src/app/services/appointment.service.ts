import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Appointment} from '../models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(
    private _http: HttpClient
  ) { }
  private _base_url: string = environment.API_URL;
  // get all appointment >>>
  getAllAppointment(): Observable<Appointment[]>{
    return this._http.get<Appointment[]>(`${this._base_url}/appointments`);
  }
  // post one appointment >>>
  postOneAppointment($appointment: Appointment): Observable<Appointment>{
    return this._http.post<Appointment>(`${this._base_url}/appointment`, $appointment);
  }
  // delete one appointment >>>
  deleteOneAppointmentById(_id: number){
    return this._http.delete(`${this._base_url}/appointment/${_id}`);
  }
}
