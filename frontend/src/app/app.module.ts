import { LoadingIndicatorModule } from './shared/components/loading-indicator/loading-indicator.module';
import { NotAuthenticatedGuard } from './shared/route-guards/not-authenticated.guard';
import { IsAuthenticatedGuard } from './shared/route-guards/is-authenticated.guard';
import { FormErrorHandler } from './shared/error-handlers/form.handler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component/app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenInterceptor } from './stream/stream.component/http-interceptors/auth-token.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    FormErrorHandler,
    IsAuthenticatedGuard,
    NotAuthenticatedGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {}
