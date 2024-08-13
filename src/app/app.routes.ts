import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
  },
  {
    path: 'galerie',
    loadChildren: () =>
      import('./pages/galerie/galerie.module').then((m) => m.GalerieModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'despre-noi',
    loadChildren: () =>
      import('./pages/despre-noi/despre-noi.module').then(
        (m) => m.DespreNoiModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {}
