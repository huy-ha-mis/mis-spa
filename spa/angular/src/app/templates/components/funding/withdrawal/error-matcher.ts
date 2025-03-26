import { ErrorStateMatcher } from '@angular/material/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';

export class ErrorMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    let hasGroupError = false;

    if (control?.value === control?.parent?.get('trfAmount')?.value) {
      hasGroupError = !!(control?.parent as FormGroup)?.hasError('amount');
    }

    return !!(
      control &&
      (control.invalid || hasGroupError) &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
