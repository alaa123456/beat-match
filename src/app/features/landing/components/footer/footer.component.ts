import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly links = [
    { label: 'Instagram', href: 'https://www.instagram.com', external: true },
    { label: 'Contact', href: 'mailto:hello@technodate.app', external: true },
    { label: 'Privacy Policy', href: '/privacy-policy', external: false },
    { label: 'Terms & Conditions', href: '/terms-conditions', external: false },
  ];
}
