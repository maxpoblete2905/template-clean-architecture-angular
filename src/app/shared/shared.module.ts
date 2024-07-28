import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { NavigateLayoutComponent } from './layout/navigate-layout/navigate-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InfoDialogComponent } from './components/info-dialog/info-dialog.component';
import { LogoutDialogComponent } from './components/logout-dialog/logoutDialog.component';
import { MessageAlertsComponent } from './components/message-alerts/message-alerts.component';
import { ContentComponent } from './components/content/content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/herader.component';
import { MenuComponent } from './components/menu/menu.component';
import { StoreLayoutComponent } from './layout/navigate-layout/store-layout/store-layout.component';
import { ProductStoreComponent } from './components/product-store/product-store.component';
import { PetsLayoutComponent } from './layout/navigate-layout/pets-layout/pets-layout.component';
import { PetsComponent } from './components/pets/pets.component';

const components = [
  AuthLayoutComponent,
  NavigateLayoutComponent,
  StoreLayoutComponent,
  PetsLayoutComponent,
];

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
    MessageAlertsComponent,
    ContentComponent,
    SideNavComponent,
    HeaderComponent,
    MenuComponent,
    ProductStoreComponent,
    PetsComponent,
  ],
  providers: [],
})
export class SharedModule {}
