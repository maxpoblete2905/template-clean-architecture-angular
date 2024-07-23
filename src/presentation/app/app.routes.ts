import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/access/login/login.component'; // Ajusta la ruta si es necesario
import { HomeComponent } from './pages/navigate/home/home.component'; // Ajusta la ruta si es necesario

export const routes: Routes = [
    { path: 'home', component: HomeComponent }, // Ruta para el componente Home
    { path: 'login', component: LoginComponent }, // Ruta para el componente Login
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige a login por defecto
    { path: '**', redirectTo: 'login' } // Redirige a login en caso de ruta no encontrada
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
