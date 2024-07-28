import { UserRepository } from '@domain/repositories/user.repository';
import { UserLoginUseCase } from '@domain/usecases/user/user-login.usecase';
import { LoginWhitCredentialUseCase } from '@domain/usecases/autentication/login-whit-credential.usecase';
import { AuthRepository } from '@domain/repositories/auth.repository';
import { LogoutSessionUseCase } from '@domain/usecases/autentication/logout-session.usecase';
import { GetSessionUseCase } from '@domain/usecases/autentication/get-session.usecase';
import { LoginWithGoogleUseCase } from '@domain/usecases/autentication/login-with-google.usecase';
import { SendPasswordResetEmailUseCase } from '@domain/usecases/autentication/send-password-reset-email.usecase';

const userLoginUseCaseFactory = (userRepo: UserRepository) =>
  new UserLoginUseCase(userRepo);

export const userLoginUseCaseProvider = {
  provide: UserLoginUseCase,
  useFactory: userLoginUseCaseFactory,
  deps: [UserRepository],
};

const loginWhitCredentialUseCaseFactory = (authRepo: AuthRepository) =>
  new LoginWhitCredentialUseCase(authRepo);

export const loginWhitCredentialProvider = {
  provide: LoginWhitCredentialUseCase,
  useFactory: loginWhitCredentialUseCaseFactory,
  deps: [AuthRepository],
};

const logoutSessionUseCaseFactory = (authRepo: AuthRepository) =>
  new LogoutSessionUseCase(authRepo);

export const logoutSessionUseCaseProvider = {
  provide: LogoutSessionUseCase,
  useFactory: logoutSessionUseCaseFactory,
  deps: [AuthRepository],
};

const getSessionUseCaseFactory = (authRepo: AuthRepository) =>
  new GetSessionUseCase(authRepo);

export const getSessionUseCaseProvider = {
  provide: GetSessionUseCase,
  useFactory: getSessionUseCaseFactory,
  deps: [AuthRepository],
};

const loginWithGoogleUseCaseFactory = (authRepo: AuthRepository) =>
  new LoginWithGoogleUseCase(authRepo);

export const loginWithGoogleUseCaseProvider = {
  provide: LoginWithGoogleUseCase,
  useFactory: loginWithGoogleUseCaseFactory,
  deps: [AuthRepository],
};

const sendPasswordResetEmailFactory = (authRepo: AuthRepository) =>
  new SendPasswordResetEmailUseCase(authRepo);

export const sendPasswordResetEmailProvider = {
  provide: SendPasswordResetEmailUseCase,
  useFactory: sendPasswordResetEmailFactory,
  deps: [AuthRepository],
};
