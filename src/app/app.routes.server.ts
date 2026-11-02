import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'privacy-policy', renderMode: RenderMode.Prerender },
  { path: 'terms-conditions', renderMode: RenderMode.Prerender },
];
