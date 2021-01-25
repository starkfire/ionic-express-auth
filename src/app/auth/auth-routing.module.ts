import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

import { LoginformComponent } from './loginform/loginform.component'
import { SignupformComponent } from './signupform/signupform.component'

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      {
        path: 'login',
        component: LoginformComponent
      },
      {
        path: 'signup',
        component: SignupformComponent
      },
      {
        path: '',
        component: LoginformComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
