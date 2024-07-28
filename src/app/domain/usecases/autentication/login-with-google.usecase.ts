import { Observable } from 'rxjs';
import { UseCase } from '@core/base/use-case';
import { AuthRepository } from '@domain/repositories/auth.repository';
import { AuthResponse } from '@data/repositories/autentication/entities/auth-response.entity';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginWithGoogleUseCase
  implements UseCase<any, AuthResponse | string>
{
  constructor(private userRepository: AuthRepository) {}

  execute(): Observable<AuthResponse> {
    return this.userRepository.loginWithGoogle();
  }
}
