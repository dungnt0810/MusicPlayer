import { Router, ActivatedRoute } from '@angular/router';
import { clickTrigger } from './../shared/animations/button-click.animation';
import { FormErrorHandler } from '../../shared/error-handlers/form.handler';
import {
  requiredValidator,
  patternValidator,
} from './../../shared/validators/common.validator';
import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { minLengthValidator } from 'src/app/shared/validators/common.validator';
import { Subscription, throwError } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [clickTrigger],
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subs: Subscription = new Subscription();
  mousedown = false;
  loading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private fb: FormBuilder,
    private fromErrHandler: FormErrorHandler
  ) {
    this.form = fb.group({
      username: [
        '',
        [requiredValidator],
      ],
      password: ['', [requiredValidator, minLengthValidator(6)]],
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  mouseEvent(event: Event) {
    event.stopPropagation();
    this.mousedown = event.type === 'mousedown' ? true : false;
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  signup() {
    const params = this.route.snapshot.queryParams;
    this.router.navigate(['/authentication/signup'], {
      queryParams: params,
    });
  }

  login(): void {
    if (this.form.invalid) {
      this.form.setErrors({ ...this.form.errors });
      this.form.markAllAsTouched();
      return;
    }
    const credentials = this.form.value;
    this.loading = true;
    this.subs.add(
      this.auth.login(JSON.stringify(credentials)).subscribe(
        (res) => {
          this.loading = false;
          const next = this.route.snapshot.queryParamMap.get('next');
          // tslint:disable-next-line: no-string-literal
          this.auth.saveAuthToken(res['token']);
          this.router.navigate([next || '/stream/']);
        },
        (err) => {
          this.loading = false;
          this.fromErrHandler.handleServerErrors(this.form, err);
        }
      )
    );
  }
}
