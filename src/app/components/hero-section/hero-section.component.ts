import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  searchQuery: string = '';
  
  onSearch() {
    console.log('Searching for:', this.searchQuery);
    // يمكن إضافة منطق البحث هنا
  }
}