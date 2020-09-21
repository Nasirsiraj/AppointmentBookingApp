import { Component, OnInit } from '@angular/core';
import {Appointment} from '../../models/Appointment';
import {AppointmentService} from '../../services/appointment.service';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  constructor(
    private _appointment_service: AppointmentService
  ) {}
  public loading: boolean = true;
  public errorMessage: string;
  public successMessage: string;
  public columns: string[] = ['appointmentDate', 'name', 'email', 'cancel'];
  public appointments: Appointment[] = [];



  // method to delete an appointment >>>
  public deleteAppointment(_$id: number){
    try {
      this._appointment_service.deleteOneAppointmentById(_$id).subscribe(()=> {
        this.updateAppointmentList();
      });
    }catch (_$e){
      console.log(_$e.message);
    }
  }

  // get the appointment list and initialize it to this appointment list
  updateAppointmentList(): void{
    this._appointment_service.getAllAppointment()
      .subscribe((appointments: Appointment[]) => {
        this.appointments = appointments;
        this.loading = false;
      },(error: ErrorEvent) => {
        this.errorMessage = error.error.message;
        this.loading = false;
      });
  }
  // getting the appointment list from the database and initializing it into appointments array >>>
  ngOnInit(): void {
   this.updateAppointmentList();
  }
}
