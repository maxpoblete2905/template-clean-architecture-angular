import { Observable } from 'rxjs';
import { AuthCredential } from '@data/repositories/autentications/entities/auth-credential.entity';
import { AuthResponse } from '@data/repositories/autentications/entities/auth-response.entity';

export abstract class AuthRepository {
  abstract signIn(params: AuthCredential): Observable<AuthResponse | null>;

  abstract signOut(): Observable<boolean>;

  abstract getCurrentUser(): Observable<AuthResponse | null>;
}
