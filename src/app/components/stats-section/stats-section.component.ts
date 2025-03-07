import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-stats-section',
  templateUrl: './stats-section.component.html',
  styleUrls: ['./stats-section.component.css']
})
export class StatsSectionComponent {
  stats = [
    { value: '99', label: 'Examination' },
    { value: '250', label: 'Consultation' },
    { value: '50', label: 'Surgeries' }
  ];
}