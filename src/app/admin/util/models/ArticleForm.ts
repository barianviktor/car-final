import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IArticleForm } from '../interfaces/article-form.interface';

export class ArticleForm extends FormGroup<IArticleForm> {
  constructor() {
    super({
      title: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      description: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      image: new FormControl('', {
        nonNullable: true,
      }),
    });
  }
}
