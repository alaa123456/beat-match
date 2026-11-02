import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  readonly launchInfo = ['Launching in Paris', '2026'];

  readonly heroTags = ['Berlin energy', 'Underground nights', 'Real connections'];
}
