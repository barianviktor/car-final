import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { IArticleForm } from './article-form.interface';
import { ImodelForm } from './model-form.interface';
import { IsmartcardForm } from './smartcard-form.interface';

export interface IcartypeForm {
  model: FormGroup<ImodelForm>;
  seats: FormControl<number>;
  design: FormControl<number>;
  title: FormControl<string>;
  titleImage: FormControl<string>;
  articles: FormArray<FormGroup<IArticleForm>>;
  smartcards: FormArray<FormGroup<IsmartcardForm>>;
  images: FormArray<FormControl<string>>;
}
