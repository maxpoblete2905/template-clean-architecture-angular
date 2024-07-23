import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { getApp, initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { routes } from './app.routes';
import { environment } from '@environments/environment'
import { provideHttpClient, withInterceptors } from "@angular/common/http";


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([]),
    ),
    provideStore(),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyC0ehvWYL1G3r-q9h19ELNpOP55e-YSSs0",
      authDomain: "test-develop-80a95.firebaseapp.com",
      projectId: "test-develop-80a95",
      storageBucket: "test-develop-80a95.appspot.com",
      messagingSenderId: "659391557459",
      appId: "1:659391557459:web:fd28c40a4c9d85c4ecfba6"
    })),
    provideAuth(() => getAuth(getApp())), provideAnimationsAsync(), provideAnimationsAsync()
  ]
};
