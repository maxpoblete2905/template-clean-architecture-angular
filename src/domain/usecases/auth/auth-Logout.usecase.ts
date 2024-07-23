import { Observable } from 'rxjs';
import { UseCase } from '@base/use-case';
import { AuthRepository } from '@domain/repositories/auth.repository';

export class LogoutSessionUseCase implements UseCase<any, boolean> {

    constructor(private userRepository: AuthRepository) { }

    execute(): Observable<boolean> {
        return this.userRepository.signOut();
    }
}