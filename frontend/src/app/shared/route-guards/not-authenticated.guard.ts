import { AuthService } from '../../authentication/shared/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NotAuthenticatedGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(route, state: RouterStateSnapshot) {
    if (!this.auth.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/stream/discover']);
    return false;
  }

  canActivateChild(route, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }
}
