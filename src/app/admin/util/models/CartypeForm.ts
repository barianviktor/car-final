import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IcartypeForm } from '../interfaces/cartype-form.interface';
import { ArticleForm } from './ArticleForm';
import { ModelForm } from './ModelForm';
import { SmartcardForm } from './SmartcardForm';

export class CartypeForm extends FormGroup<IcartypeForm> {
  constructor() {
    super({
      model: new ModelForm(),
      seats: new FormControl(2, {
        validators: [Validators.required, Validators.min(1)],
        nonNullable: true,
      }),
      design: new FormControl(1, {
        validators: [Validators.required, Validators.min(1)],
        nonNullable: true,
      }),
      title: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      titleImage: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      articles: new FormArray<ArticleForm>([]),
      images: new FormArray<FormControl<string>>([]),
      smartcards: new FormArray<SmartcardForm>([]),
      // seats: new FormControl(0, { validators:[Validators.required, ], nonNullable:true})
    });
  }
}
