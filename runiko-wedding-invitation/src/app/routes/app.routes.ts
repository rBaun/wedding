import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'invite', pathMatch: 'full' },
  {
    path: 'invite',
    loadComponent: () =>
      import('./pages/page-invite/page-invite.component').then(
        (m) => m.PageInviteComponent
      ),
  },
  {
    path: 'invite/:code',
    loadComponent: () =>
      import('./pages/page-invite/page-invite.component').then(
        (m) => m.PageInviteComponent
      ),
  },
  {
    path: 'rsvp',
    loadComponent: () =>
      import('./pages/page-rsvp/page-rsvp.component').then(
        (m) => m.PageRsvpComponent
      ),
  },
  {
    path: 'info',
    loadComponent: () =>
      import('./pages/page-info/page-info.component').then(
        (m) => m.PageInfoComponent
      ),
  },
];
