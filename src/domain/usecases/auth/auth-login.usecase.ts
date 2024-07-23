import { Observable } from 'rxjs';
import { UseCase } from '@base/use-case';
import { AuthRepository } from '@domain/repositories/auth.repository';
import { AuthCredential } from '@data/repositories/autentications/entities/auth-send.entity';
import { AuthResponse } from '@data/repositories/autentications/entities/auth-result.entity';

export class AuthLoginUseCase implements UseCase<AuthCredential, AuthResponse> {

    constructor(private userRepository: AuthRepository) { }

    execute(params: AuthCredential): Observable<AuthResponse> {
        return this.userRepository.signIn(params);
    }
}