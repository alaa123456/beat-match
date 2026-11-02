import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  template: `
    <main class="legal-page">
      <div class="container legal-shell">
        <p class="eyebrow">Privacy Policy</p>
        <h1>Privacy Policy</h1>
        <p>
          Lineup is building a platform for music-driven connection. We collect only the information
          necessary to manage the waitlist, improve the product experience and communicate updates.
        </p>
        <p>
          We may collect email addresses, city-level preferences, and usage insights relevant to product
          development. This information is kept confidential and used only for product updates, community
          communication, and service improvement.
        </p>
        <p>
          We do not sell personal information. If you have questions about data processing or want to
          update your information, contact hello&#64;technodate.app.
        </p>
      </div>
    </main>
  `,
  styles: [
    `
      :host { display: block; }
      .legal-page { padding: 6rem 0 4rem; }
      .legal-shell { max-width: 760px; }
      .eyebrow { color: var(--color-accent); text-transform: uppercase; letter-spacing: 0.2rem; font-size: 0.72rem; }
      h1 { font-size: clamp(2.5rem, 6vw, 4.2rem); line-height: 0.98; letter-spacing: -0.06em; text-transform: uppercase; margin: 1rem 0 1.5rem; }
      p { color: var(--color-text-soft); font-size: 1.08rem; line-height: 1.8; margin: 0 0 1.2rem; }
    `,
  ],
})
export class PrivacyPolicyComponent {}
