import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories = [
    { name: 'Medical', link: '/medical' },
    { name: 'Engineering', link: '/engineering' },
    { name: 'Education', link: '/education' },
    { name: 'Tourism', link: '/tourism' },
    { name: 'Commerce', link: '/commerce' }
  ];
  
  isMenuOpen: boolean = false;
  isDarkMode: boolean = false;
  activeCategory: string = 'Medical'; // تعيين Medical كرابط نشط افتراضي
  
  constructor() { }
  
  ngOnInit(): void {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    this.isDarkMode = savedDarkMode;
  
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }
  
  
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  // تبديل الوضع المظلم
  toggleDarkMode(event: Event): void {
    event.stopPropagation(); // منع إغلاق القائمة عند النقر على زر الوضع المظلم
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  
    // تطبيق أو إزالة `dark-mode` على `<body>`
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
  
  
  // تعيين التصنيف النشط
  setActiveCategory(category: string): void {
    this.activeCategory = category;
  }
  
  // إغلاق القائمة عند النقر خارجها
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any): void {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.main-nav');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    
    if (this.isMenuOpen && menuToggle && navMenu) {
      if (!menuToggle.contains(event.target) && 
          !navMenu.contains(event.target) && 
          !darkModeToggle?.contains(event.target)) {
        this.isMenuOpen = false;
      }
    }
  }
  
  // إغلاق القائمة عند تغيير حجم الشاشة
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (window.innerWidth > 992 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}