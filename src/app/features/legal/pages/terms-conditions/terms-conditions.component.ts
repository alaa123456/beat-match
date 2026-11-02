import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  template: `
    <main class="legal-page">
      <div class="container legal-shell">
        <p class="eyebrow">Terms & Conditions</p>
        <h1>Terms & Conditions</h1>
        <p>
          By accessing Lineup, you agree to use the platform responsibly and in line with community
          values rooted in respect, safety and authentic human connection.
        </p>
        <p>
          We do not guarantee the outcome or availability of any future product release. Content, features,
          and launch timing may evolve before public release.
        </p>
        <p>
          Users must respect the rights, privacy and safety of others. Lineup may update these terms
          as the product evolves, and continued use of the service indicates acceptance of changes.
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
export class TermsConditionsComponent {}
