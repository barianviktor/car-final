import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-text-input',
  templateUrl: './form-text-input.component.html',
  styleUrls: ['./form-text-input.component.scss'],
})
export class FormTextInputComponent implements OnInit {
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
