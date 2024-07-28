import { Observable } from 'rxjs';
import { UseCase } from '@core/base/use-case';
import { AuthRepository } from '@domain/repositories/auth.repository';
import { AuthCredential } from '@data/repositories/autentication/entities/auth-credential.entity';
import { AuthResponse } from '@data/repositories/autentication/entities/auth-response.entity';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginWhitCredentialUseCase
  implements UseCase<AuthCredential, AuthResponse>
{
  constructor(private userRepository: AuthRepository) {}

  execute(params: AuthCredential): Observable<AuthResponse> {
    return this.userRepository.signIn(params);
  }
}
