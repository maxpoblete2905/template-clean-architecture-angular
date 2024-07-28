import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from '@angular/fire/auth';
import { from, Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

// Mappers
import { AuthResponseMapperImplementation } from './mappers/auth-response.mapper';

// Entities
import { AuthCredential } from '@data/repositories/autentication/entities/auth-credential.entity';
import { AuthResponse } from './entities/auth-response.entity';

// Repositories
import { AuthRepository } from '@domain/repositories/auth.repository';

// Exception Handling
import { FirebaseErrorHandler } from './exception/firebase-error-handler';

@Injectable({
  providedIn: 'root',
})
export class AuthImplementationRepository implements AuthRepository {
  private authResponseMapper: AuthResponseMapperImplementation;

  constructor(private auth: Auth, private errorHandler: FirebaseErrorHandler) {
    this.authResponseMapper = new AuthResponseMapperImplementation();
  }

  getCurrentUser(): Observable<AuthResponse> {
    return new Observable<AuthResponse>((observer) => {
      const unsubscribe = onAuthStateChanged(this.auth, async (user) => {
        if (!user) {
          observer.next(this.authResponseMapper.toAuthResponse(null, null));
          observer.complete();
          return;
        }

        try {
          const token = await user.getIdToken();
          observer.next(this.authResponseMapper.toAuthResponse(user, token));
        } catch (error) {
          observer.error(this.errorHandler.handleError(error));
        }
      });

      // Cleanup subscription when the observable is unsubscribed
      return () => unsubscribe();
    });
  }

  signIn({ email, password }: AuthCredential): Observable<AuthResponse> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap(async ({ user }) => {
        if (!user) throw new Error('User not found after sign in');
        const token = await user.getIdToken();
        return this.authResponseMapper.toAuthResponse(user, token);
      }),
      catchError((error) => {
        // Manejo de errores específicos usando FirebaseErrorHandler
        const errorMessage = this.errorHandler.handleError(error);
        console.error(errorMessage); // Puedes agregar más lógica de manejo si es necesario
        return of(errorMessage); // Retorna el mensaje de error
      })
    );
  }

  signUp({ email, password }: AuthCredential): Observable<AuthResponse> {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(
      switchMap(async ({ user }) => {
        if (!user) throw new Error('User not found after sign up');
        const token = await user.getIdToken();
        return this.authResponseMapper.toAuthResponse(user, token);
      }),
      catchError((error) => {
        // Manejo de errores específicos usando FirebaseErrorHandler
        const errorMessage = this.errorHandler.handleError(error);
        console.error(errorMessage); // Puedes agregar más lógica de manejo si es necesario
        return of(errorMessage); // Retorna el mensaje de error
      })
    );
  }

  sendPasswordResetEmail(email: string): Observable<AuthResponse> {
    return from(sendPasswordResetEmail(this.auth, email)).pipe(
      map(() => {
        return {
          status: {
            status: true,
            statusCode: 200,
            message:
              'Email de restablecimiento de contraseña enviado con éxito.',
          },
          data: undefined, // Devuelve undefined
        };
      }),
      catchError((error) => {
        // Manejo de errores específicos usando FirebaseErrorHandler
        const errorMessage = this.errorHandler.handleError(error);
        console.error(errorMessage); // Puedes agregar más lógica de manejo si es necesario
        return of(errorMessage); // Retorna el mensaje de error
      })
    );
  }

  signOut(): Observable<AuthResponse> {
    return from(firebaseSignOut(this.auth)).pipe(
      map(() => {
        return {
          status: {
            status: true,
            statusCode: 200,
            message: 'Sesión cerrada con éxito.',
          },
          data: undefined, // Devuelve undefined
        };
      }),
      catchError((error) => {
        // Manejo de errores específicos usando FirebaseErrorHandler
        const errorMessage = this.errorHandler.handleError(error);
        console.error(errorMessage); // Puedes agregar más lógica de manejo si es necesario
        return of(errorMessage); // Retorna el mensaje de error
      })
    );
  }

  loginWithGoogle(): Observable<AuthResponse> {
    return this.signInWithProvider(new GoogleAuthProvider());
  }

  loginWithGithub(): Observable<AuthResponse> {
    return this.signInWithProvider(new GithubAuthProvider());
  }

  private signInWithProvider(provider: any): Observable<AuthResponse> {
    return from(signInWithPopup(this.auth, provider)).pipe(
      switchMap(async ({ user }) => {
        if (!user)
          throw new Error('User not found after sign in with provider');
        const token = await user.getIdToken();
        return this.authResponseMapper.toAuthResponse(user, token);
      }),
      catchError((error) => {
        // Manejo de errores específicos usando FirebaseErrorHandler
        const errorMessage = this.errorHandler.handleError(error);
        console.error(errorMessage); // Puedes agregar más lógica de manejo si es necesario
        return of(errorMessage); // Retorna el mensaje de error
      })
    );
  }
}
