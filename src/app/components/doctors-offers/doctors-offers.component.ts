import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



interface DoctorOffer {
  name: string;
  image: string;
  discount: number;
  specialty:string;
}
@Component({
  standalone:true,
  selector: 'app-doctors-offers',
  imports: [CommonModule],
  templateUrl: './doctors-offers.component.html',
  styleUrl: './doctors-offers.component.css'
})
export class DoctorsOffersComponent {

  doctorOffers: DoctorOffer[] = [
    { name: 'Dr. Ahmed', image: '../assets/images/doctor.jpg' , discount: 50 ,specialty:'Cardiologist'},
    { name: 'Dr. Mohamed', image: '../assets/images/doctor.jpg', discount: 50 ,specialty:'Dentist' },
    { name: 'Dr. Ali', image: '../assets/images/doctor.jpg', discount: 50  ,specialty:'Neurologist'},
    { name: 'Dr. Hassan', image: '../assets/images/doctor.jpg', discount: 50 ,specialty:'Dermatologist' },
    { name: 'Dr. Mahmoud', image: '../assets/images/doctor.jpg', discount: 50 ,specialty:'Gynecologist' },
    { name: 'Dr. Ibrahim', image: '../assets/images/doctor.jpg', discount: 50 ,specialty:'Pediatrician' },
    { name: 'Dr. Youssef', image: '../assets/images/doctor.jpg', discount: 50 ,specialty:'Pediatrician' },
    { name: 'Dr. Khalid', image: '../assets/images/doctor.jpg', discount: 50 ,specialty:'Gynecologist' },
    { name: 'Dr. Omar', image: '../assets/images/doctor.jpg', discount: 50,specialty:'Gynecologist' }
  ]; 
}