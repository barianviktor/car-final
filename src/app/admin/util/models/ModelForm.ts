import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImodelForm } from '../interfaces/model-form.interface';

export class ModelForm extends FormGroup<ImodelForm> {
  constructor() {
    super({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      maker: new FormControl(1, {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }
}
