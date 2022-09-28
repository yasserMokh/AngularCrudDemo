import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appSelectRequiredValidator]',
  providers:[{provide: NG_VALIDATORS, useExisting: SelectRequiredValidatorDirective, multi: true}]
})
export class SelectRequiredValidatorDirective implements Validator {
  @Input('appSelectRequiredValidator') defaultValue: string='';
  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log('appSelectRequiredValidator', control.value == this.defaultValue, 'control.value', control.value, 'this.defaultValue', this.defaultValue)
    if(control.value == this.defaultValue){
      control.setErrors({ 'defaultSelected': true });
      return { 'defaultSelected': true };
    }else{
      return null;
    }
    // return control.value == this.defaultValue ? { 'defaultSelected': true } : null;
  }
}
