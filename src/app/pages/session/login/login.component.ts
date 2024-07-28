import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataModule } from '@data/data.module';
import { RedirectService } from '@core/services/redirect.service';
import { StorageService } from '@core/services/storage.service';
import { LoginWhitCredentialUseCase } from '@domain/usecases/autentication/login-whit-credential.usecase';
import { LoginWithGoogleUseCase } from '@domain/usecases/autentication/login-with-google.usecase';
import { SendPasswordResetEmailUseCase } from '@domain/usecases/autentication/send-password-reset-email.usecase';
import { AuthResponse } from '@data/repositories/autentication/entities/auth-response.entity';
import { MessageAlertsComponent } from '../../../shared/components/message-alerts/message-alerts.component';
import { MessageStatus } from '@shared/interface';

@Component({
  selector: 'app-login',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    DataModule,
    MessageAlertsComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  messageStatus: MessageStatus = {
    class: 'error',
    message: '',
    showMessage: false,
  };

  constructor(
    private fb: FormBuilder,
    private readonly loginWhitCredentialUseCase: LoginWhitCredentialUseCase,
    private readonly loginWithGoogleUseCase: LoginWithGoogleUseCase,
    private readonly sendPasswordResetEmailUseCase: SendPasswordResetEmailUseCase,
    private readonly redirectService: RedirectService,
    private readonly storageService: StorageService
  ) {
    this.loginForm = this.fb.group({
      email: ['maxx2905@example.com', [Validators.required, Validators.email]],
      password: ['passwordSegura123', [Validators.required]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.email?.value;
      const password = this.password?.value;
      if (email && password) {
        this.loginWhitCredentialUseCase
          .execute(this.loginForm.value)
          .subscribe((authResponse) => {
            const { data, status }: AuthResponse = authResponse;
            if (authResponse.data) {
              this.storageService.setItem('session', JSON.stringify(data));
              this.redirectService.redirectToAndClearHistory('home');
            } else {
              this.messageStatus.message = status.message;
              this.messageStatus.class = 'error';
              this.messageStatus.showMessage = true;
            }
          });
      }
    }
  }

  loginWithGoogle() {
    this.loginWithGoogleUseCase.execute().subscribe((authResponse) => {
      const { data, status }: AuthResponse = authResponse;
      if (authResponse.data) {
        this.storageService.setItem('session', JSON.stringify(data));
        this.redirectService.redirectToAndClearHistory('home');
      } else {
        this.messageStatus.message = status.message;
        this.messageStatus.class = 'error';
        this.messageStatus.showMessage = true;
      }
    });
  }

  forgotPassword() {
    const email = this.email?.value;
    if (email === '') {
      return;
    }
    this.sendPasswordResetEmailUseCase
      .execute(email)
      .subscribe((authResponse) => {
        const { status }: AuthResponse = authResponse;
        if (status.status) {
          this.messageStatus.message = `${status.message} a ${this.email?.value}`;
          this.messageStatus.class = 'success';
          this.messageStatus.showMessage = true;
        } else {
          this.messageStatus.message = status.message;
          this.messageStatus.class = 'error';
          this.messageStatus.showMessage = true;
        }
      });
  }

  createAccount() {
    this.redirectService.redirectTo('register');
  }

  loginWithGitHub() {
    throw new Error('Method not implemented.');
  }
}
