import { Observable } from 'rxjs';
import { UseCase } from '@base/use-case';
import { AuthRepository } from '@domain/repositories/auth.repository';
import { AuthResponse } from '@data/repositories/autentications/entities/auth-response.entity';
import { Injectable } from '@angular/core';

@Injectable()
export class GetSessionUseCase implements UseCase<any, AuthResponse | null> {
  constructor(private userRepository: AuthRepository) {}

  execute(): Observable<AuthResponse | null> {
    return this.userRepository.getCurrentUser();
  }
}
