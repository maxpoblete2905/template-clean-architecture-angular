import { AuthResponse } from '@data/repositories/autentications/entities/auth-result.entity';
import { AuthCredential } from '@data/repositories/autentications/entities/auth-send.entity';
import { Observable } from 'rxjs';

export abstract class AuthRepository {

    abstract signIn(params: AuthCredential): Observable<AuthResponse>;

    abstract signOut(): Observable<boolean>;

    abstract getCurrentUser(): Observable<AuthResponse>
}
