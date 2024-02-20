import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({"projectId":"temp-1a793","appId":"1:633294722727:web:8d8d5eb80ea1a3df382d82","storageBucket":"temp-1a793.appspot.com","apiKey":"AIzaSyCSP0dgBoc4UNs9JyHwOK2zNHtXhwygpUY","authDomain":"temp-1a793.firebaseapp.com","messagingSenderId":"633294722727"}),
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
