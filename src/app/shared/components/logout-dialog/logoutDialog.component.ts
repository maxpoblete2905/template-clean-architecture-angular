import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DataModule } from '@data/data.module';
import { LogoutSessionUseCase } from '@domain/usecases/autentication/logout-session.usecase';
import { RedirectService } from '@core/services/redirect.service';
import { StorageService } from '@core/services/storage.service';

@Component({
  selector: 'app-logout-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, DataModule],
  templateUrl: './logoutDialog.component.html',
  styleUrl: './logoutDialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LogoutDialogComponent>,
    private readonly logoutSessionUseCase: LogoutSessionUseCase,
    private readonly redirectService: RedirectService,
    private readonly storageService: StorageService
  ) {}

  logout(): void {
    this.logoutSessionUseCase.execute().subscribe((closedSession) => {
      if (closedSession) {
        console.log('user logout');
        this.storageService.removeItem('session');
        this.redirectService.redirectToAndClearHistory('login');
        this.dialogRef.close();
      }
    });
  }
}
