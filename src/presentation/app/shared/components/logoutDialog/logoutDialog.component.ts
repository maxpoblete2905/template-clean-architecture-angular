import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { DataModule } from "@data/data.module";
import { LogoutSessionUseCase } from "@domain/usecases/auth/auth-Logout.usecase";
import { RedirectService } from "../../services/redirect.service";

@Component({
    selector: 'app-logout-dialog',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        DataModule
    ],
    templateUrl: './logoutDialog.component.html',
    styleUrl: './logoutDialog.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutDialogComponent {


    constructor(
        public dialogRef: MatDialogRef<LogoutDialogComponent>,
        private readonly logoutSessionUseCase: LogoutSessionUseCase,
        private readonly redirectService: RedirectService
    ) { }

    logout(): void {
        // Aquí implementa la lógica para cerrar sesión, como limpiar tokens, redirigir al usuario, etc.
        this.logoutSessionUseCase.execute()
        this.redirectService.redirectToAndClearHistory('login')
        this.dialogRef.close();

    }
}
