import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new-cartype',
  templateUrl: './new-cartype.component.html',
  styleUrls: ['./new-cartype.component.scss'],
})
export class NewCartypeComponent implements OnInit {
  cartypeForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.cartypeForm = fb.group({
      model: fb.group({
        name: ['', [Validators.required]],
        maker: [null, [Validators.required]],
      }),
      seats: [5, [Validators.required, Validators.min(1)]],
      title: ['', [Validators.required]],
      titleImage: ['', [Validators.required]],
      articles: fb.array([]),
      smartcard: fb.group({
        image: [''],
        smartpoints: fb.array([]),
      }),
      images: fb.array([]),
    });
  }
  get images(): FormArray {
    return this.cartypeForm.get('images') as FormArray;
  }
  get articles(): FormArray {
    return this.cartypeForm.get('articles') as FormArray;
  }
  get smartcard(): FormGroup {
    return this.cartypeForm.get('smartcard') as FormGroup;
  }
  get titleImage(): FormControl {
    return this.cartypeForm.get('titleImage') as FormControl;
  }
  get title(): FormControl {
    return this.cartypeForm.get('title') as FormControl;
  }
  get seats(): FormControl {
    return this.cartypeForm.get('seats') as FormControl;
  }
  ngOnInit(): void {}
  handleSubmit() {
    this.cartypeForm.markAllAsTouched();
    console.log(this.cartypeForm);
  }
}
