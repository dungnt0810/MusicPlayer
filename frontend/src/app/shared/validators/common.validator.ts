import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const requiredValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if (!control.value) {
    return { required: 'This field is required' };
  }
  return null;
};

export function minLengthValidator(requiredLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value.length < requiredLength) {
      return { minLenght: `Requierd lenght is ${requiredLength}` };
    }
    return null;
  };
}

export function patternValidator(pattern: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (pattern.test(control.value)) {
      return null;
    }
    return { pattern: 'Invalid value' };
  };
}
