import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-forgot-password',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './forgot-password.component.html',
    styleUrl: './forgot-password.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent { }
