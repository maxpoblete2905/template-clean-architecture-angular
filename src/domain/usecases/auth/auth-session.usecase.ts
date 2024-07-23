import { Observable } from 'rxjs';
import { UseCase } from '@base/use-case';
import { AuthRepository } from '@domain/repositories/auth.repository';
import { AuthResponse } from '@data/repositories/autentications/entities/auth-result.entity';

export class GetSessionUseCase implements UseCase<any, AuthResponse> {

    constructor(private userRepository: AuthRepository) { }

    execute(): Observable<AuthResponse> {
        return this.userRepository.getCurrentUser();
    }
}