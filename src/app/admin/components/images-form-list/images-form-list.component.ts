import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-images-form-list',
  templateUrl: './images-form-list.component.html',
  styleUrls: ['./images-form-list.component.scss'],
})
export class ImagesFormListComponent implements OnInit {
  @Input() images!: FormArray;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.images);
  }
  addImage() {
    let imageController = new FormControl('', [Validators.required]);
    this.images.push(imageController);
  }
  removeImage(index: number) {
    this.images.removeAt(index);
  }
  castAbsToFc(e: AbstractControl) {
    return e as FormControl;
  }
}
