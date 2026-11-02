import { Routes } from '@angular/router';

import { LandingPageComponent } from './features/landing/pages/landing-page/landing-page.component';
import { PrivacyPolicyComponent } from './features/legal/pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './features/legal/pages/terms-conditions/terms-conditions.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: '**', component: LandingPageComponent },
];
