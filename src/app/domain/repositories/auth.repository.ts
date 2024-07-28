import { Observable } from 'rxjs';
import { AuthCredential } from '@data/repositories/autentication/entities/auth-credential.entity';
import { AuthResponse } from '@data/repositories/autentication/entities/auth-response.entity';

export abstract class AuthRepository {
  abstract signIn(params: AuthCredential): Observable<AuthResponse>;

  abstract signOut(): Observable<AuthResponse>;

  abstract getCurrentUser(): Observable<AuthResponse>;

  abstract loginWithGoogle(): Observable<AuthResponse>;

  abstract sendPasswordResetEmail(email: string): Observable<AuthResponse>;
}
