import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut as firebaseSignOut, User, onAuthStateChanged } from '@angular/fire/auth';
import { Observable, from, of } from 'rxjs';
import { AuthCredential } from '@data/repositories/autentications/entities/auth-send.entity';
import { AuthRepository } from '@domain/repositories/auth.repository';
import { AuthResponse } from './entities/auth-result.entity';

@Injectable({
    providedIn: 'root',
})
export class AuthImplementationRepository implements AuthRepository {
    constructor(private auth: Auth) { }

    getCurrentUser(): Observable<AuthResponse> {
        return new Observable<AuthResponse>((observer) => {
            onAuthStateChanged(this.auth, async (user) => {
                let data: AuthResponse = {
                    email: '',
                    displayName: '',
                    uid: '',
                    token: ''
                };

                if (user) {
                    try {
                        const token = await user.getIdToken();
                        data = {
                            email: user.email || '',
                            displayName: user.displayName || '',
                            uid: user.uid,
                            token: token
                        };
                    } catch (error) {
                        console.error('Error fetching user token:', error);
                    }
                }

                observer.next(data);
                observer.complete();
            });
        });
    }
    signIn(params: AuthCredential): Observable<AuthResponse> {
        return new Observable<AuthResponse>((observer) => {
            signInWithEmailAndPassword(this.auth, params.email, params.password)
                .then(async ({ user }) => {
                    if (user) {
                        try {
                            const token = await user.getIdToken();
                            const data: AuthResponse = {
                                email: user.email || '',
                                displayName: user.displayName || '',
                                uid: user.uid,
                                token: token
                            };
                            observer.next(data);
                            observer.complete();
                        } catch (error) {
                            console.error('Error fetching user token:', error);
                            observer.error('Error fetching user token');
                        }
                    } else {
                        observer.error('User not found after sign in');
                    }
                })
                .catch((error) => {
                    this.handleSignInError(error);
                    observer.error(error.message);
                });
        });
    }

    signOut(): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            firebaseSignOut(this.auth)
                .then(() => {
                    observer.next(true);
                    observer.complete();
                })
                .catch((error) => {
                    this.handleSignOutError(error);
                    observer.next(false);
                    observer.complete();
                });
        });
    }

    private handleSignInError(error: any): void {
        switch (error.code) {
            case 'auth/invalid-email':
                console.error('Invalid email address format.');
                break;
            case 'auth/user-not-found':
                console.error('User not found.');
                break;
            case 'auth/wrong-password':
                console.error('Incorrect password.');
                break;
            case 'auth/network-request-failed':
                console.error('Network error. Please check your internet connection.');
                break;
            default:
                console.error('An unexpected error occurred:', error.message);
        }
    }

    private handleSignOutError(error: any): void {
        switch (error.code) {
            case 'auth/network-request-failed':
                console.error('Network error. Please check your internet connection.');
                break;
            default:
                console.error('An unexpected error occurred:', error.message);
        }
    }
}
