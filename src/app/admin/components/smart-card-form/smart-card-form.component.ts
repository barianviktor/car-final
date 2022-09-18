import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-smart-card-form',
  templateUrl: './smart-card-form.component.html',
  styleUrls: ['./smart-card-form.component.scss'],
})
export class SmartCardFormComponent implements OnInit {
  //smartcardForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  addCursor(e: any) {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left; //x position within the element.
    let y = e.clientY - rect.top; //y position within the element.
    let xPercent = Math.round((100 / rect.width) * x);
    let yPercent = Math.round((100 / rect.height) * y);
    console.log(`x: ${xPercent}, y: ${yPercent}`);
  }
}
