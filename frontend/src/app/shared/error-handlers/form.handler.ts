import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormErrorHandler {
  constructor() {}

  handleServerErrors(form: FormGroup, error: HttpErrorResponse): void {
    if (error.status !== 422 && error.status !== 400) {
      return;
    }
    const formErrors: { [key: string]: Array<string> | string } = error.error;
    Object.keys(formErrors).forEach((control) => {
      const serverErrors = {};
      const controlError = formErrors[control];
      if (Array.isArray(controlError)) {
        const controlErrors = controlError as Array<string>;
        controlErrors.forEach((err, index: number) => {
          const errorTag = `server_${index}`;
          serverErrors[errorTag] = err;
        });
        form.controls[control].setErrors(serverErrors);
      } else {
        form.controls[control].setErrors({ server: formErrors[control] });
      }
    });
    form.markAllAsTouched();
  }

  updateValidity(form: FormGroup) {
    Object.keys(form.controls).forEach((control) => {
      form.controls[control].updateValueAndValidity();
    });
  }
}
