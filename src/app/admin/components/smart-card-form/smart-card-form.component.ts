import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-smart-card-form',
  templateUrl: './smart-card-form.component.html',
  styleUrls: ['./smart-card-form.component.scss'],
})
export class SmartCardFormComponent implements OnInit {
  @Input() smartcard!: FormGroup;
  openedSmartPoint: number | undefined = 0;
  constructor(private fb: FormBuilder) {}
  handleSmartPoint(index: number) {
    index == this.openedSmartPoint
      ? (this.openedSmartPoint = undefined)
      : (this.openedSmartPoint = index);
  }
  get image(): FormControl {
    return this.smartcard.get('image') as FormControl;
  }
  get smartpoints(): FormArray {
    return this.smartcard.get('smartpoints') as FormArray;
  }
  castAbsToFormControl(e: AbstractControl): FormControl {
    return e as FormControl;
  }
  ngOnInit(): void {}

  addSmartPoint(e: any) {
    let rect = e.target.getBoundingClientRect();
    let xPercent = Math.round((100 / rect.width) * (e.clientX - rect.left));
    let yPercent = Math.round((100 / rect.height) * (e.clientY - rect.top));
    let smartpointGroup = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      image: [''],
      x: [xPercent, [Validators.required, Validators.min(0)]],
      y: [yPercent, [Validators.required, Validators.min(0)]],
    });
    this.smartpoints.push(smartpointGroup);
  }
  removeSmartpoint(index: any) {
    this.smartpoints.removeAt(index);
  }
}
