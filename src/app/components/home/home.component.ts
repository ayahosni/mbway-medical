import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { StatsSectionComponent } from '../stats-section/stats-section.component';
import { DepartmentsSectionComponent } from '../departments-section/departments-section.component';
import { PartnersSectionComponent } from '../partners-section/partners-section.component';
import {BookAppointmentComponent} from '../book-appointment/book-appointment.component';
import { CustomerExperienceComponent} from '../customer-experience/customer-experience.component';
import { DoctorsOffersComponent} from '../doctors-offers/doctors-offers.component';
@Component({
  standalone: true,
  selector: 'app-home',
  imports: [HeroSectionComponent, StatsSectionComponent, DepartmentsSectionComponent, PartnersSectionComponent,BookAppointmentComponent,CustomerExperienceComponent,DoctorsOffersComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
