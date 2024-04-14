import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormContatoComponent } from './componentes/form-contato/form-contato.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContatoComponent } from './componentes/contato/contato.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfig } from './constants/constants';
import { AngularFireModule } from '@angular/fire/compat';


@NgModule({
  declarations: [
    AppComponent,
    FormContatoComponent,
    ContatoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
