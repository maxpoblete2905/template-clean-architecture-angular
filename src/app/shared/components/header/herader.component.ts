import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { LogoutDialogComponent } from '../logout-dialog/logoutDialog.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  templateUrl: './herader.component.html',
  styleUrls: ['./herader.component.css'],
})
export class HeaderComponent {
  @Input() sidenav: any;

  constructor(private dialog: MatDialog) {}

  toggleSidenav(): void {
    this.sidenav.toggle();
  }

  openLogoutDialog(): void {
    this.dialog.open(LogoutDialogComponent);
  }
}
