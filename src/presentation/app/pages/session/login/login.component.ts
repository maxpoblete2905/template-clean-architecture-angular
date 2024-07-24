import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthLoginUseCase } from '@domain/usecases/auth/auth-login.usecase';
import { DataModule } from '@data/data.module';
import { RedirectService } from '../../../shared/services/redirect.service';
import { StorageService } from '../../../shared/services/storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    DataModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly authLoginUseCase: AuthLoginUseCase,
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
        this.authLoginUseCase
          .execute(this.loginForm.value)
          .subscribe((data) => {
            if (data) {
              this.storageService.setItem('session', JSON.stringify(data));
              this.redirectService.redirectToAndClearHistory('home');
            }
          });
      }
    }
  }
}
