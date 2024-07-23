import { Mapper } from '@base/mapper';
import { UserModel } from '@domain/models/user.model';
import { UserEntity } from '../entities/user-entity';

export class UserImplementationRepositoryMapper extends Mapper<UserEntity, UserModel> {
    mapFrom(param: UserEntity): UserModel {
        return {
            uid: param.uid,
            email: param.email,
            password: param.password, // Nota: La contraseña generalmente no se debe mapear directamente.
            displayName: param.displayName,
            photoURL: param.photoURL,
            roles: param.roles
        };
    }

    mapTo(param: UserModel): UserEntity {
        return {
            uid: param.uid,
            email: param.email,
            password: param.password, // Nota: La contraseña generalmente no se debe mapear directamente.
            displayName: param.displayName,
            photoURL: param.photoURL,
            roles: param.roles || [] // Asigna un array vacío si roles es undefined
        };
    }
}
