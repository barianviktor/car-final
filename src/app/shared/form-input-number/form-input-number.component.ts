import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-input-number',
  templateUrl: './form-input-number.component.html',
  styleUrls: ['./form-input-number.component.scss'],
})
export class FormInputNumberComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() placeholder!: string;
  constructor() {}

  ngOnInit(): void {
    //console.log(this.control);
  }
  isItRequired() {
    return this.control.hasValidator(Validators.required) ? '*' : '';
  }
}
