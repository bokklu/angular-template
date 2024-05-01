import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'feature1',
    loadChildren: () =>
      import('./features/feature1/feature1.routes').then((x) => x.routes),
  },
  {
    path: 'feature2',
    loadChildren: () =>
      import('./features/feature2/feature2.routes').then((x) => x.routes),
  },
];
