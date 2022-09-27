import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCompareValidator]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting: CompareValidatorDirective,
      multi:true
    }
  ]
})
export class CompareValidatorDirective implements Validator {
  @Input('appCompareValidator') controlNameToCompare: string='';
  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let controlToCompare=control.parent?.get(this.controlNameToCompare);
    if(controlToCompare && control.value !==controlToCompare?.value){
      return {'appCompareValidator': 'valueDoesNotMatch'}
    }
    return null;
  }

}
