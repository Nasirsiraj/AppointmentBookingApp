import { Component, OnInit } from '@angular/core';
import {Appointment} from '../../models/Appointment';
import {AppointmentService} from '../../services/appointment.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  constructor(
    private _appointment_service: AppointmentService,
    private _fb: FormBuilder
  ){}
  public success_message: string;
  public error_message: string;

  public appointmentForm = this._fb.group({
    id: [null, [Validators.required]],
    appointmentDate: ['', [Validators.required]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required]]
  });


  // method to post the appointment created by the user
  postAppointment(_$appointment: Appointment): void{
    this.success_message = '';
    this.error_message = '';
    this._appointment_service.postOneAppointment(_$appointment).subscribe((_$returnedAppointment: Appointment) => {
      this.success_message = `Appointment Booked Successfully for ${_$appointment.appointmentDate}`;
      this.id.setValue(null);
      this.appointmentDate.setValue('');
      this.name.setValue('');
      this.email.setValue('');
    },(error: ErrorEvent) => {
      this.error_message = error.error.message;
    });
  }
  // getter method >>>
  get id(){
    return this.appointmentForm.get('id');
  }

  get appointmentDate(){
    return this.appointmentForm.get('appointmentDate');
  }
  get name(){
    return this.appointmentForm.get('name');
  }
  get email(){
    return this.appointmentForm.get('email');
  }

  ngOnInit(): void {
    this.success_message = null;
    this.error_message = null;
    this.id.setValue(null);
    this.appointmentDate.setValue('');
    this.name.setValue('');
    this.email.setValue('');
  }
}
