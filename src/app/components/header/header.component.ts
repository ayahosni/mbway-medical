import { Component,HostListener,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
    imports: [CommonModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  categories = [
    { name: 'Medical', link: '/medical' },
    { name: 'Engineering', link: '/engineering' },
    { name: 'Education', link: '/education' },
    { name: 'Tourism', link: '/tourism' },
    { name: 'Commerce', link: '/commerce' }
  ];
  

  isMenuOpen: boolean = false;
  
  constructor() { }
  
  ngOnInit(): void { }
  
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      menuToggle.classList.toggle('active');
    }
  }
  
  // إغلاق القائمة عند النقر خارجها
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any): void {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.main-nav');
    
    if (this.isMenuOpen && menuToggle && navMenu) {
      if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
        this.isMenuOpen = false;
        menuToggle.classList.remove('active');
      }
    }
  }
  
  // إغلاق القائمة عند تغيير حجم الشاشة
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (window.innerWidth > 992 && this.isMenuOpen) {
      this.isMenuOpen = false;
      const menuToggle = document.querySelector('.menu-toggle');
      if (menuToggle) {
        menuToggle.classList.remove('active');
      }
    }
  }
}