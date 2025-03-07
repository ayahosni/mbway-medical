import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-departments-section',
  templateUrl: './departments-section.component.html',
  styleUrls: ['./departments-section.component.css']
})
export class DepartmentsSectionComponent {
  departments: { id: string; name: string; description: string; imageUrl: string; }[] = [
    { id: 'cosmetic', name: 'Cosmetic', description: 'For harmonious beauty with confidence and safety', imageUrl: 'assets/images/cosmetic.jpg' },
    { id: 'slimming', name: 'Slimming', description: 'Achieve your ideal body with safe and effective methods', imageUrl: 'assets/images/slimming.jpg' },
    { id: 'eye-surgery', name: 'Eye Surgery', description: 'Advanced techniques for clear vision and eye health', imageUrl: 'assets/images/eye-surgery.jpg' },
    { id: 'oncology', name: 'Oncology', description: 'Comprehensive cancer treatment and care', imageUrl: 'assets/images/oncology.jpg' },
    { id: 'orthopedics', name: 'Orthopedics', description: 'Expert care for bones and joints', imageUrl: 'assets/images/orthopedics.jpg' },
    { id: 'dental', name: 'Dental Care', description: 'Top-quality dental services for a perfect smile', imageUrl: 'assets/images/dental.jpg' },
    { id: 'cardiology', name: 'Cardiology', description: 'Heart care with advanced medical expertise', imageUrl: 'assets/images/cardiology.jpg' },
    { id: 'neurology', name: 'Neurology', description: 'Specialized brain and nervous system care', imageUrl: 'assets/images/neurology.jpg' },
    { id: 'pediatrics', name: 'Pediatrics', description: 'Caring for children’s health and well-being', imageUrl: 'assets/images/pediatrics.jpg' }
  ];

  visibleDepartments: { id: string; name: string; description: string; imageUrl: string; }[] = [];
  currentIndex = 0;
  indicators: number[] = [];

  constructor() {
    this.setupIndicators();
    this.updateVisibleDepartments();
    this.autoSlide();
  }

  updateVisibleDepartments() {
    this.visibleDepartments = this.departments.slice(this.currentIndex, this.currentIndex + 3);
  }

  setupIndicators() {
    this.indicators = Array.from({ length: Math.ceil(this.departments.length / 3) }, (_, i) => i);
  }

  autoSlide() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 3) % this.departments.length;
      if (this.currentIndex >= this.departments.length) {
        this.currentIndex = 0;
      }
      this.updateVisibleDepartments();
    }, 3000);
  }

  goToSlide(index: number) {
    this.currentIndex = index * 3;
    this.updateVisibleDepartments();
  }

  getActiveIndex(): number {
    return Math.floor(this.currentIndex / 3);
  }
}
