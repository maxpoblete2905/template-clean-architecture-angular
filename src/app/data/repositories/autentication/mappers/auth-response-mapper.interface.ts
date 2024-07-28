// src/mappers/auth-response-mapper.interface.ts
import { User } from '@angular/fire/auth';
import { AuthResponse } from '../entities/auth-response.entity';

export interface AuthResponseMapper {
  toAuthResponse(user: User, token: string): AuthResponse;
  toEmptyAuthResponse(): null;
}
