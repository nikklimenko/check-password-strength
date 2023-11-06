import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormPasswordComponent } from './components/form-password/form-password.component';
import {PasswordStrengthComponent} from "./components/password-strength/password-strength.component";

@NgModule({
  declarations: [
    AppComponent,
    FormPasswordComponent,
    PasswordStrengthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
