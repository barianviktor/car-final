import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-cartype',
  templateUrl: './new-cartype.component.html',
  styleUrls: ['./new-cartype.component.scss'],
})
export class NewCartypeComponent implements OnInit {
  cartypeForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.cartypeForm = fb.group({
      seats: [0, [Validators.required, Validators.min(1)]],
      title: ['', [Validators.required]],
      articles: fb.array([]),
    });
  }

  get articles(): FormArray {
    return this.cartypeForm.get('articles') as FormArray;
  }

  ngOnInit(): void {}
}
