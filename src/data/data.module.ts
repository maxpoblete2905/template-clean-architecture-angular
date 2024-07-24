// src/app/data/data.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Agregado
import { UserRepository } from '@domain/repositories/user.repository';
import { UserLoginUseCase } from '@domain/usecases/user/user-login.usecase';
import { UserImplementationRepository } from './repositories/user/user-implementation.repository';
import { AuthLoginUseCase } from '@domain/usecases/auth/auth-login.usecase';
import { AuthRepository } from '@domain/repositories/auth.repository';
import { AuthImplementationRepository } from './repositories/autentications/auth-implementation.repository';
import { LogoutSessionUseCase } from '@domain/usecases/auth/auth-logout.usecase';
import { GetSessionUseCase } from '@domain/usecases/auth/auth-session.usecase';

const userLoginUseCaseFactory = (userRepo: UserRepository) => new UserLoginUseCase(userRepo);

export const userLoginUseCaseProvider = {
    provide: UserLoginUseCase,
    useFactory: userLoginUseCaseFactory,
    deps: [UserRepository],
};

const authLoginUseCaseFactory = (authRepo: AuthRepository) => new AuthLoginUseCase(authRepo);

export const authLoginUseCaseProvider = {
    provide: AuthLoginUseCase,
    useFactory: authLoginUseCaseFactory,
    deps: [AuthRepository],
};


const logoutSessionUseCaseFactory = (authRepo: AuthRepository) => new LogoutSessionUseCase(authRepo);

export const logoutSessionUseCaseProvider = {
    provide: LogoutSessionUseCase,
    useFactory: logoutSessionUseCaseFactory,
    deps: [AuthRepository],
};


const getSessionUseCaseFactory = (authRepo: AuthRepository) => new GetSessionUseCase(authRepo);

export const getSessionUseCaseProvider = {
    provide: GetSessionUseCase,
    useFactory: getSessionUseCaseFactory,
    deps: [AuthRepository],
};

@NgModule({
    providers: [
        userLoginUseCaseProvider,
        authLoginUseCaseProvider,
        logoutSessionUseCaseProvider,
        getSessionUseCaseProvider,
        { provide: UserRepository, useClass: UserImplementationRepository },
        { provide: AuthRepository, useClass: AuthImplementationRepository },

    ],
    imports: [
        CommonModule,
        HttpClientModule,
        AngularFirestoreModule,
        AngularFireAuthModule, // Asegúrate de agregar este módulo
    ],
})
export class DataModule { }
