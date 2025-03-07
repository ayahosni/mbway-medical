import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-book-appointment',
  imports: [ReactiveFormsModule],
  templateUrl: './book-appointment.component.html',
  styleUrl: './book-appointment.component.css'
})
export class BookAppointmentComponent {
  appointmentForm: FormGroup;

  doctorsList = ['Dr. Smith', 'Dr. Johnson', 'Dr. Brown'];
  specialtiesList = ['Cardiology', 'Neurology', 'Orthopedics'];
  shiftsList = ['Morning', 'Afternoon', 'Evening'];

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      fullName: ['', Validators.required],
      doctorName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      medicalSpecialty: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bookingDate: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      shift: ['', Validators.required],
      gender: ['', Validators.required],
      previousInformation: [null],
      message: ['']
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      console.log('Appointment Data:', this.appointmentForm.value);
      alert('Appointment booked successfully!');
    }
  }
}
