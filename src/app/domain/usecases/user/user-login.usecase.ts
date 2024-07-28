import { Observable } from 'rxjs';
import { UseCase } from '@core/base/use-case';
import { UserModel } from '@domain/models/user.model';
import { UserRepository } from '../../repositories/user.repository';
import { Injectable } from '@angular/core';

@Injectable()
export class UserLoginUseCase
  implements UseCase<{ username: string; password: string }, UserModel>
{
  constructor(private userRepository: UserRepository) {}

  execute(params: {
    username: string;
    password: string;
  }): Observable<UserModel> {
    return this.userRepository.login(params);
  }
}
