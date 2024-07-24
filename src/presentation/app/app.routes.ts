import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/session/login/login.component'; // Ajusta la ruta si es necesario
import { HomeComponent } from './pages/navigate/home/home.component'; // Ajusta la ruta si es necesario
import { Error404Component } from './pages/common/error404/error404.component';
import { NavigateLayoutComponent } from './shared/layout/navigateLayout/navigateLayout.component';
import { AuthLayoutComponent } from './shared/layout/authLayout/authLayout.component';
import { ProfileComponent } from './pages/navigate/profile/profile.component';

export enum ROUTES_APP {
  HOME = 'home',
  LOGIN = 'login',
  PROFILE = 'profile',
}

export const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES_APP.LOGIN,
    pathMatch: 'full',
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: ROUTES_APP.LOGIN,
        loadComponent: () => LoginComponent,
      },
    ],
  },
  {
    path: '',
    component: NavigateLayoutComponent,
    children: [
      {
        path: ROUTES_APP.HOME,
        loadComponent: () => HomeComponent,
      },
      {
        path: ROUTES_APP.PROFILE,
        loadComponent: () => ProfileComponent,
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
