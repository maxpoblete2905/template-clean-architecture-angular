// src/environments/firebase.config.ts
import { EnvironmentProviders } from '@angular/core';
import { provideFirebaseApp, initializeApp, getApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { environment } from '@environments/environment';

export const firebaseProviders: EnvironmentProviders[] = [
  provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  provideAuth(() => getAuth(getApp())),
  provideFirestore(() => getFirestore(getApp())),
  provideStorage(() => getStorage(getApp())),
];
