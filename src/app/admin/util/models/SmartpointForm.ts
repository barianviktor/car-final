import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IsmartpointForm } from '../interfaces/smartpoint-form.interface';

export class SmartpointForm extends FormGroup<IsmartpointForm> {
  constructor() {
    super({
      description: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      image: new FormControl(''),
      title: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      x: new FormControl(0, { nonNullable: true }),
      y: new FormControl(0, { nonNullable: true }),
    });
  }
}
