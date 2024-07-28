import { Injectable } from '@angular/core';
import { AuthResponse } from '../entities/auth-response.entity';

@Injectable({
  providedIn: 'root',
})
export class FirebaseErrorHandler {
  handleError(error: any): AuthResponse {
    let errorMessage: string;
    let statusCode: number;

    // Valida el código de error de Firebase y asigna el mensaje adecuado
    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage = 'El correo electrónico proporcionado no es válido.';
        statusCode = 400; // Bad Request
        break;
      case 'auth/user-not-found':
        errorMessage =
          'No se ha encontrado ningún usuario con ese correo electrónico.';
        statusCode = 404; // Not Found
        break;
      case 'auth/wrong-password':
        errorMessage =
          'La contraseña proporcionada es incorrecta. Verifique sus credenciales.';
        statusCode = 401; // Unauthorized
        break;
      case 'auth/too-many-requests':
        errorMessage =
          'Se ha excedido el límite de intentos. Inténtelo más tarde.';
        statusCode = 429; // Too Many Requests
        break;
      case 'auth/email-already-in-use':
        errorMessage = 'El correo electrónico ya está en uso.';
        statusCode = 409; // Conflict
        break;
      case 'auth/weak-password':
        errorMessage = 'La contraseña proporcionada es demasiado débil.';
        statusCode = 400; // Bad Request
        break;
      case 'auth/missing-email':
        errorMessage = 'El correo electrónico es obligatorio.';
        statusCode = 400; // Bad Request
        break;
      case 'auth/no-current-user':
        errorMessage = 'No hay ningún usuario actualmente conectado.';
        statusCode = 404; // Not Found
        break;
      case 'auth/popup-closed-by-user':
        errorMessage = 'El popup de autenticación fue cerrado por el usuario.';
        statusCode = 400; // Bad Request
        break;
      case 'auth/cancelled-popup-request':
        errorMessage = 'La solicitud del popup fue cancelada.';
        statusCode = 400; // Bad Request
        break;
      default:
        errorMessage = 'Las credenciales proporcionadas son incorrectas.';
        statusCode = 500; // Internal Server Error
    }

    // Devuelve un objeto AuthResponse con el mensaje de error
    return {
      status: {
        status: false,
        statusCode: statusCode,
        message: errorMessage,
      },
      // Puedes añadir otros campos aquí si es necesario
    };
  }
}
