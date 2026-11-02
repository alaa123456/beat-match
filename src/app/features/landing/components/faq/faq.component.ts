import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  readonly faqItems = [
    {
      question: 'What is Beatmatch?',
      answer:
        'Beatmatch is a dating experience built for people who share a genuine passion for techno, underground music and late-night culture.',
    },
    {
      question: 'Is Beatmatch only for techno lovers?',
      answer:
        'It is designed for music lovers who feel at home in clubs, festivals and electronic scenes, but the focus remains on cultural connection and shared energy.',
    },
    {
      question: 'Will I be able to discover people attending the same events?',
      answer:
        'Yes. Event discovery is a core part of the experience, helping people connect before the night starts and continue after the set ends.',
    },
    {
      question: 'When will Beatmatch launch?',
      answer:
        'The platform is preparing for launch in Paris first. Exact timing will be shared as the early-access community grows.',
    },
    {
      question: 'Is Beatmatch free?',
      answer:
        'The early-access waitlist is free to join, and the final product model will be announced closer to launch.',
    },
  ];

  readonly activeIndex = signal<number | null>(0);

  toggleAccordion(index: number): void {
    this.activeIndex.update((current) => (current === index ? null : index));
  }
}
