import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  readonly menuOpen = signal(false);

  readonly navItems = [
    { label: 'The premise', href: '#the-concept' },
    { label: 'Three signals', href: '#how-it-works' },
    { label: 'Night study', href: '#the-experience' },
    { label: 'FAQ', href: '#faq' },
  ];

  toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
