import { AuthResponseMapper } from './auth-response-mapper.interface';
import { User } from '@angular/fire/auth';
import { AuthResponse } from '@data/repositories/autentication/entities/auth-response.entity';

export class AuthResponseMapperImplementation implements AuthResponseMapper {
  toAuthResponse(user: User | null, token: string | null): AuthResponse {
    return {
      status: {
        status: user != null && token != null,
        statusCode: user != null && token != null ? 200 : 400,
        message:
          user != null && token != null
            ? 'Success'
            : 'Error processing request',
      },
      data: user
        ? {
            email: user.email || '',
            displayName: user.displayName || '',
            uid: user.uid,
            token: token || '',
          }
        : null,
    };
  }

  toEmptyAuthResponse(): null {
    return null;
  }
}
