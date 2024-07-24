import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { InfoDialogComponent } from '../../components/infoDialog/infoDialog.component';
import { LogoutDialogComponent } from '../../components/logoutDialog/logoutDialog.component';

@Component({
  selector: 'app-navigate-layout',
  templateUrl: './navigateLayout.component.html',
  styleUrls: ['./navigateLayout.component.css'],
})
export class NavigateLayoutComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private dialog: MatDialog) {}

  toggleSidenav(): void {
    this.sidenav.toggle();
  }

  openLogoutDialog(): void {
    this.dialog.open(LogoutDialogComponent);
  }

  openInfoDialog(): void {
    this.dialog.open(InfoDialogComponent);
  }
}
