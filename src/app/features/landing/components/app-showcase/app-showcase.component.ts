import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-app-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-showcase.component.html',
  styleUrl: './app-showcase.component.css',
})
export class AppShowcaseComponent {
  readonly matchData = [
    { label: 'Shared genres', value: '03' },
    { label: 'Taste overlap', value: '92%' },
    { label: 'Set pace', value: '132 BPM' },
  ];
}
