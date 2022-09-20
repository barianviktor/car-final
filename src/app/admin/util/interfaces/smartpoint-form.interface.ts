import { FormControl } from '@angular/forms';

export interface IsmartpointForm {
  title: FormControl<string>;
  description: FormControl<string>;
  image: FormControl<string | null>;
  x: FormControl<number>;
  y: FormControl<number>;
}
