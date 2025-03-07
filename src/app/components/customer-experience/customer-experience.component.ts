import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  image: string;
  text: string;
  before: string;
  after: string;
}
@Component({
  standalone: true,
  selector: 'app-customer-experience',
  imports: [CommonModule],
  templateUrl: './customer-experience.component.html',
  styleUrl: './customer-experience.component.css'
})
export class CustomerExperienceComponent {
  testimonials: Testimonial[] = [
    {
        name: 'Thomas Daniel',
        image: 'https://via.placeholder.com/80',
        text: 'My weight loss surgery experience was amazing! Thanks to the specialized medical team and excellent care...',
        before: 'https://via.placeholder.com/150',
        after: 'https://via.placeholder.com/150'
    },
    {
        name: 'Corey Korsgaard',
        image: 'https://via.placeholder.com/80',
        text: 'I underwent surgery with this amazing medical team, and the experience was much smoother than I expected...',
        before: 'https://via.placeholder.com/150',
        after: 'https://via.placeholder.com/150'
    },
    {
      name: 'Corey Korsgaard',
      image: 'https://via.placeholder.com/80',
      text: 'I underwent surgery with this amazing medical team, and the experience was much smoother than I expected...',
      before: 'https://via.placeholder.com/150',
      after: 'https://via.placeholder.com/150'
  },
  {
    name: 'Corey Korsgaard',
    image: 'https://via.placeholder.com/80',
    text: 'I underwent surgery with this amazing medical team, and the experience was much smoother than I expected...',
    before: 'https://via.placeholder.com/150',
    after: 'https://via.placeholder.com/150'
}
];
}