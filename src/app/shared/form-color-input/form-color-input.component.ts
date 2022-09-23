import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-color-input',
  templateUrl: './form-color-input.component.html',
  styleUrls: ['./form-color-input.component.scss'],
})
export class FormColorInputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() placeholder!: string;
  constructor() {}

  ngOnInit(): void {}
}
