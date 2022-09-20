import { FormControl } from '@angular/forms';

export interface ImodelForm {
  name: FormControl<string>;
  maker: FormControl<number>;
}
