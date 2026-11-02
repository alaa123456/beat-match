import { Component } from '@angular/core';

import { AppShowcaseComponent } from '../../components/app-showcase/app-showcase.component';
import { BrandStatementComponent } from '../../components/brand-statement/brand-statement.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { HowItWorksComponent } from '../../components/how-it-works/how-it-works.component';
import { ManifestoComponent } from '../../components/manifesto/manifesto.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { WaitlistComponent } from '../../components/waitlist/waitlist.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    BrandStatementComponent,
    HowItWorksComponent,
    FeaturesComponent,
    AppShowcaseComponent,
    ManifestoComponent,
    WaitlistComponent,
    FaqComponent,
    FooterComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
