import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
})
export class FeaturesComponent {
  readonly features = [
    {
      title: 'Music compatibility',
      description: 'Discover people based on shared genres, artists and musical preferences.',
      accent: 'signal',
    },
    {
      title: 'Event connections',
      description: 'Find people attending the same techno events as you.',
      accent: 'metal',
    },
    {
      title: 'Your sound identity',
      description: 'Show your musical personality through the sounds you love.',
      accent: 'neutral',
    },
    {
      title: 'Real connections',
      description: 'Move beyond endless swiping and create opportunities to meet in real life.',
      accent: 'signal',
    },
  ];
}
