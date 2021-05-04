import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginURL = 'http://localhost:9596/api/users/authentication/login/';
  private signupURL =
    'http://localhost:9596/api/users/authentication/register/';
  constructor(private http: HttpClient) {}

  login(credentials: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(this.loginURL, credentials, options);
  }

  logout() {
    localStorage.removeItem('authToken');
  }

  signup(data: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(this.signupURL, data, options);
  }

  saveAuthToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  retrieveAuthToken(): string {
    return localStorage.getItem('authToken');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('authToken') ? true : false;
  }
}
