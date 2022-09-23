import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { SmartpointForm } from '../../../../util/models/SmartpointForm';

@Component({
  selector: 'app-smart-card-form',
  templateUrl: './smart-card-form.component.html',
  styleUrls: ['./smart-card-form.component.scss'],
})
export class SmartCardFormComponent implements OnInit {
  @Input() smartcard!: FormGroup;
  @Input() index!: number;
  openedSmartPoint: number | undefined = 0;
  @Output() removeSmartcard = new EventEmitter<number>();
  constructor() {}

  get image(): FormControl {
    return this.smartcard.get('image') as FormControl;
  }
  get smartpoints(): FormArray {
    return this.smartcard.get('smartpoints') as FormArray;
  }
  castAbsToFg(e: AbstractControl): FormGroup {
    return e as FormGroup;
  }
  ngOnInit(): void {}
  handleSmartPoint(index: number) {
    index == this.openedSmartPoint
      ? (this.openedSmartPoint = undefined)
      : (this.openedSmartPoint = index);
  }
  addSmartPoint(e: any) {
    let rect = e.target.getBoundingClientRect();
    let xPercent = Math.round((100 / rect.width) * (e.clientX - rect.left));
    let yPercent = Math.round((100 / rect.height) * (e.clientY - rect.top));
    let smartpoint = new SmartpointForm();
    smartpoint.get('x')?.setValue(xPercent);
    smartpoint.get('y')?.setValue(yPercent);
    this.smartpoints.push(smartpoint);
  }
  removeSmartpoint(index: any) {
    this.smartpoints.removeAt(index);
  }
  onDelete() {
    this.removeSmartcard.emit(this.index);
  }
}
