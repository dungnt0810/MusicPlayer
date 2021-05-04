import { LoadingIndicatorModule } from './../shared/components/loading-indicator/loading-indicator.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component/authentication.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    SignupComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
  ],
})
export class AuthenticationModule {}
