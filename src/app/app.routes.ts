import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes').then((x) => x.routes),
  },
  {
    path: 'feature2',
    loadChildren: () =>
      import('./features/feature2/feature2.routes').then((x) => x.routes),
  },
];
