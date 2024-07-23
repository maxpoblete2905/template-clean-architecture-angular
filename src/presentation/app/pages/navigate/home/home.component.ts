import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list'; // Importa MatGridListModule
import { InfoDialogComponent } from '../../../shared/components/infoDialog/infoDialog.component';
import { GetSessionUseCase } from '@domain/usecases/auth/auth-session.usecase';
import { DataModule } from '@data/data.module';
import { LogoutDialogComponent } from '../../../shared/components/logoutDialog/logoutDialog.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
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
        DataModule
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
    constructor(
        private dialog: MatDialog,
        private readonly getSessionUseCase: GetSessionUseCase
    ) { }

    ngOnInit(): void {
        this.getSessionUseCase.execute().subscribe((userSession) => {
            if (userSession.token) {

            }
        })
    }

    openLogoutDialog(): void {
        this.dialog.open(LogoutDialogComponent);
    }

    openInfoDialog(): void {
        this.dialog.open(InfoDialogComponent);
    }
}
