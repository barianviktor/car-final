import { FormControl } from '@angular/forms';

export interface IArticleForm {
  title: FormControl<string>;
  description: FormControl<string>;
  image: FormControl<string>;
}
