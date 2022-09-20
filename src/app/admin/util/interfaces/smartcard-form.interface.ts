import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { IsmartpointForm } from './smartpoint-form.interface';

export interface IsmartcardForm {
  image: FormControl<string>;
  smartpoints: FormArray<FormGroup<IsmartpointForm>>;
}
