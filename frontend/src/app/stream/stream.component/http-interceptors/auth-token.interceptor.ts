import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthTokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('authToken');
    const req = request.clone({
      setHeaders: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
      },
    });
    return next.handle(req);
  }
}
