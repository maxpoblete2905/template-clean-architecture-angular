import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
} from '@angular/fire/auth';
import { from, Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthCredential } from '@data/repositories/autentications/entities/auth-credential.entity';
import { AuthRepository } from '@domain/repositories/auth.repository';
import { AuthResponse } from './entities/auth-response.entity';

@Injectable({
  providedIn: 'root',
})
export class AuthImplementationRepository implements AuthRepository {
  constructor(private auth: Auth) {}

  getCurrentUser(): Observable<AuthResponse | null> {
    return new Observable<AuthResponse | null>((observer) => {
      const unsubscribe = onAuthStateChanged(this.auth, async (user) => {
        if (!user) {
          observer.next(null);
          observer.complete();
          return;
        }

        try {
          const token = await user.getIdToken();
          observer.next(this.createAuthResponse(user, token));
        } catch (error) {
          console.error('Error fetching user token:', error);
          observer.error('Error fetching user token');
        } finally {
          observer.complete();
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
        return this.createAuthResponse(user, token);
      }),
      catchError((error) => {
        this.handleSignInError(error);
        return of(this.createEmptyAuthResponse());
      })
    );
  }

  signOut(): Observable<boolean> {
    return from(firebaseSignOut(this.auth)).pipe(
      map(() => true),
      catchError((error) => {
        this.handleSignOutError(error);
        return of(false);
      })
    );
  }

  private createAuthResponse(user: User, token: string): AuthResponse {
    return {
      email: user.email || '',
      displayName: user.displayName || '',
      uid: user.uid,
      token: token,
    };
  }

  private createEmptyAuthResponse(): AuthResponse {
    return {
      email: '',
      displayName: '',
      uid: '',
      token: '',
    };
  }

  private handleSignInError(error: any): void {
    console.error(this.getSignInErrorMessage(error.code));
  }

  private handleSignOutError(error: any): void {
    console.error(this.getSignOutErrorMessage(error.code));
  }

  private getSignInErrorMessage(code: string): string {
    switch (code) {
      case 'auth/invalid-email':
        return 'Invalid email address format.';
      case 'auth/user-not-found':
        return 'User not found.';
      case 'auth/wrong-password':
        return 'Incorrect password.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your internet connection.';
      default:
        return 'An unexpected error occurred.';
    }
  }

  private getSignOutErrorMessage(code: string): string {
    switch (code) {
      case 'auth/network-request-failed':
        return 'Network error. Please check your internet connection.';
      default:
        return 'An unexpected error occurred.';
    }
  }
}
