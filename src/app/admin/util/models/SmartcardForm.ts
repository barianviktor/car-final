import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IsmartcardForm } from '../interfaces/smartcard-form.interface';

export class SmartcardForm extends FormGroup<IsmartcardForm> {
  constructor() {
    super({
      image: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      smartpoints: new FormArray([]),
    });
  }
}
