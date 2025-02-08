import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.routes').then((x) => x.routes),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.routes').then((x) => x.routes),
  },
];
