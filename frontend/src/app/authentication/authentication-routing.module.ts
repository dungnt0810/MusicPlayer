import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication.component/authentication.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          index: 1,
          animation: {
            value: 'login',
            params: { indexDiff: 100, rindexDiff: -100 },
          },
        },
      },
      {
        path: 'signup',
        component: SignupComponent,
        data: {
          index: 2,
          animation: {
            value: 'signup',
            params: { indexDiff: 100, rindexDiff: -100 },
          },
        },
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
