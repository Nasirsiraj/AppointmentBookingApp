export class Appointment{
  public id: number;
  public appointmentDate: string;
  public name: string;
  public email: string;

  constructor(id ?: number, appointmentDate ?: string, name ?: string, email ?: string) {
    this.id = id;
    this.appointmentDate = appointmentDate;
    this.name = name;
    this.email = email;
  }
}
