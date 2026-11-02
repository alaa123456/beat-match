import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css',
})
export class HowItWorksComponent {
  readonly steps = [
    {
      number: '01',
      title: 'Discover your sound',
      description: 'Share your favorite genres, artists and the sounds that define your nights.',
    },
    {
      number: '02',
      title: 'Find your frequency',
      description: 'Meet people who share your musical universe, your energy and your intentions.',
    },
    {
      number: '03',
      title: 'Meet in real life',
      description: 'Discover events, connect before the night and meet on the dancefloor.',
    },
  ];
}
