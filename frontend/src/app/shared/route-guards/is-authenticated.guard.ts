import { AuthService } from '../../authentication/shared/services/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class IsAuthenticatedGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(route, state: RouterStateSnapshot) {
    if (this.auth.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/authentication/login'], {
      queryParams: { next: state.url },
    });
    return false;
  }

  canActivateChild(route, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }
}
