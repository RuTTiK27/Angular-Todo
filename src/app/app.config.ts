import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideToastr } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({"projectId":"todo-20b65","appId":"1:284086014593:web:c9d05805a6f73c59e8f380","storageBucket":"todo-20b65.appspot.com","apiKey":"AIzaSyCRVmPLoCeilygKesYl_tXmZw38JqJzCBc","authDomain":"todo-20b65.firebaseapp.com","messagingSenderId":"284086014593","measurementId":"G-EXE1BMZ57C"})), 
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync(),
    provideToastr()
  ]
};
