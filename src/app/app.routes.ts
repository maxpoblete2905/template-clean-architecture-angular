import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/session/login/login.component';
import { HomeComponent } from './pages/navigate/home/home.component';
import { Error404Component } from './pages/common/error404/error404.component';
import { NavigateLayoutComponent } from './shared/layout/navigate-layout/navigate-layout.component';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';
import { ProfileComponent } from './pages/navigate/profile/profile.component';
import { RegisterComponent } from './pages/session/register/register.component';
import { ProductStoreComponent } from '@shared/components/product-store/product-store.component';
import { StoreLayoutComponent } from '@shared/layout/navigate-layout/store-layout/store-layout.component';
import { PetsLayoutComponent } from '@shared/layout/navigate-layout/pets-layout/pets-layout.component';
import { PetsComponent } from '@shared/components/pets/pets.component';

export enum ROUTES_APP {
  HOME = 'home',
  LOGIN = 'login',
  PROFILE = 'profile',
  REGISTER = 'register',
  STORE = 'store',
  PETS = 'pets',
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
        component: LoginComponent,
      },
      {
        path: ROUTES_APP.REGISTER,
        component: RegisterComponent,
      },
    ],
  },
  {
    path: '',
    component: NavigateLayoutComponent,
    children: [
      {
        path: ROUTES_APP.HOME,
        component: HomeComponent,
      },
      {
        path: ROUTES_APP.PROFILE,
        component: ProfileComponent,
      },
      {
        path: ROUTES_APP.PETS,
        component: PetsLayoutComponent,
        children: [
          {
            path: 'pets',
            component: PetsComponent,
          },
        ],
      },
      {
        path: ROUTES_APP.STORE,
        component: StoreLayoutComponent,
        children: [
          {
            path: '',
            redirectTo: 'product',
            pathMatch: 'full',
          },
          {
            path: 'product',
            component: ProductStoreComponent,
          },
          // {
          //   path: 'product/:id',
          //   component: StoreProductComponent,
          // },
        ],
      },
    ],
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
