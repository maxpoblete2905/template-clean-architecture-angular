import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthLayoutComponent } from './layout/authLayout/authLayout.component';
import { NavigateLayoutComponent } from './layout/navigateLayout/navigateLayout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InfoDialogComponent } from './components/infoDialog/infoDialog.component';
import { LogoutDialogComponent } from './components/logoutDialog/logoutDialog.component';
import { SideBarComponent } from './components/sideBar/sideBar.component';

const components = [AuthLayoutComponent, NavigateLayoutComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    LogoutDialogComponent,
    InfoDialogComponent,
    SideBarComponent,
  ],
  providers: [],
})
export class SharedModule {}
