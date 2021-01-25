import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { LoginformComponent } from './loginform/loginform.component'
import { SignupformComponent } from './signupform/signupform.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AuthPage, LoginformComponent, SignupformComponent],
  exports: [LoginformComponent, SignupformComponent]
})
export class AuthPageModule {}
