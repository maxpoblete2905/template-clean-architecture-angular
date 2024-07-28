import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { UserRepository } from '@domain/repositories/user.repository';
import { UserImplementationRepository } from './repositories/user/user-implementation.repository';
import { AuthRepository } from '@domain/repositories/auth.repository';
import { AuthImplementationRepository } from './repositories/autentication/auth-implementation.repository';
import {
  userLoginUseCaseProvider,
  loginWhitCredentialProvider,
  logoutSessionUseCaseProvider,
  getSessionUseCaseProvider,
  loginWithGoogleUseCaseProvider,
  sendPasswordResetEmailProvider,
} from './data.providers';

@NgModule({
  providers: [
    userLoginUseCaseProvider,
    loginWhitCredentialProvider,
    logoutSessionUseCaseProvider,
    getSessionUseCaseProvider,
    loginWithGoogleUseCaseProvider,
    sendPasswordResetEmailProvider,
    { provide: UserRepository, useClass: UserImplementationRepository },
    { provide: AuthRepository, useClass: AuthImplementationRepository },
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
})
export class DataModule {}
