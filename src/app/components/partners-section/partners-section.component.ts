import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-partners-section',
  imports: [CommonModule],
  templateUrl: './partners-section.component.html',
  styleUrl: './partners-section.component.css'
})
export class PartnersSectionComponent {
  partners = [
    { 
      name: 'Dr. Ahmed Ali', 
      specialty: 'Cardiologist',
      imageUrl: 'assets/images/doctor1.jpg',
      facebook: 'https://facebook.com/dr.ahmedali',
      linkedin: 'https://linkedin.com/in/dr.ahmedali',
      instagram: 'https://instagram.com/dr.ahmedali'
    },
    { 
      name: 'Dr. Sarah Mohamed', 
      specialty: 'Dentist',
      imageUrl: 'assets/images/doctor2.jpg',
      facebook: 'https://facebook.com/dr.sarahmohamed',
      linkedin: 'https://linkedin.com/in/dr.sarahmohamed',
      instagram: 'https://instagram.com/dr.sarahmohamed'
    },
    { 
      name: 'Dr. Khaled Hassan', 
      specialty: 'Neurologist',
      imageUrl: 'assets/images/doctor3.jpg',
      facebook: 'https://facebook.com/dr.khaledhassan',
      linkedin: 'https://linkedin.com/in/dr.khaledhassan',
      instagram: 'https://instagram.com/dr.khaledhassan'
    },
    { 
      name: 'Dr. Khaled Hassan', 
      specialty: 'Neurologist',
      imageUrl: 'assets/images/doctor3.jpg',
      facebook: 'https://facebook.com/dr.khaledhassan',
      linkedin: 'https://linkedin.com/in/dr.khaledhassan',
      instagram: 'https://instagram.com/dr.khaledhassan'
    },
    { 
      name: 'Dr. Khaled Hassan', 
      specialty: 'Neurologist',
      imageUrl: 'assets/images/doctor3.jpg',
      facebook: 'https://facebook.com/dr.khaledhassan',
      linkedin: 'https://linkedin.com/in/dr.khaledhassan',
      instagram: 'https://instagram.com/dr.khaledhassan'
    },
    { 
      name: 'Dr. Khaled Hassan', 
      specialty: 'Neurologist',
      imageUrl: 'assets/images/doctor3.jpg',
      facebook: 'https://facebook.com/dr.khaledhassan',
      linkedin: 'https://linkedin.com/in/dr.khaledhassan',
      instagram: 'https://instagram.com/dr.khaledhassan'
    },
    { 
      name: 'Dr. Khaled Hassan', 
      specialty: 'Neurologist',
      imageUrl: 'assets/images/doctor3.jpg',
      facebook: 'https://facebook.com/dr.khaledhassan',
      linkedin: 'https://linkedin.com/in/dr.khaledhassan',
      instagram: 'https://instagram.com/dr.khaledhassan'
    },
    { 
      name: 'Dr. Khaled Hassan', 
      specialty: 'Neurologist',
      imageUrl: 'assets/images/doctor3.jpg',
      facebook: 'https://facebook.com/dr.khaledhassan',
      linkedin: 'https://linkedin.com/in/dr.khaledhassan',
      instagram: 'https://instagram.com/dr.khaledhassan'
    }

  ];
}

