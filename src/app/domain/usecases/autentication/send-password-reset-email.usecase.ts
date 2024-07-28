import { Observable } from 'rxjs';
import { UseCase } from '@core/base/use-case';
import { AuthRepository } from '@domain/repositories/auth.repository';
import { Injectable } from '@angular/core';
import { AuthResponse } from '@data/repositories/autentication/entities/auth-response.entity';

@Injectable()
export class SendPasswordResetEmailUseCase
  implements UseCase<string, AuthResponse>
{
  constructor(private userRepository: AuthRepository) {}

  execute(params: string): Observable<AuthResponse> {
    return this.userRepository.sendPasswordResetEmail(params);
  }
}
