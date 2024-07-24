import { Observable } from 'rxjs';
import { UseCase } from '@base/use-case';
import { AuthRepository } from '@domain/repositories/auth.repository';
import { AuthCredential } from '@data/repositories/autentications/entities/auth-credential.entity';
import { AuthResponse } from '@data/repositories/autentications/entities/auth-response.entity';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthLoginUseCase
  implements UseCase<AuthCredential, AuthResponse | null>
{
  constructor(private userRepository: AuthRepository) {}

  execute(params: AuthCredential): Observable<AuthResponse | null> {
    return this.userRepository.signIn(params);
  }
}
