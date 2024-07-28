import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InfoDialogComponent } from '../../../shared/components/info-dialog/info-dialog.component';
import { GetSessionUseCase } from '@domain/usecases/autentication/get-session.usecase';
import { DataModule } from '@data/data.module';
import { LogoutDialogComponent } from '../../../shared/components/logout-dialog/logoutDialog.component';
import { RedirectService } from '../../../core/services/redirect.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    LogoutDialogComponent,
    InfoDialogComponent,
    DataModule,
  ],
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly getSessionUseCase: GetSessionUseCase,
    private readonly redirectService: RedirectService
  ) {}

  ngOnInit(): void {
    this.getSessionUseCase.execute().subscribe((userSession) => {
      if (!userSession) {
        this.redirectService.redirectToAndClearHistory('login');
      } else {
        console.log('inicio de session correctamente');
        console.log(userSession);
      }
    });
  }
}
