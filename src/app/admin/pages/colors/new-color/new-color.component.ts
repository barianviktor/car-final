import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Icolor } from 'src/app/interfaces/icolor';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-new-color',
  templateUrl: './new-color.component.html',
  styleUrls: ['./new-color.component.scss'],
})
export class NewColorComponent implements OnInit {
  colorForm: FormGroup;
  constructor(private colorService: ColorService, private fb: FormBuilder) {
    this.colorForm = fb.group({
      name: ['', [Validators.required]],
      color: ['', [Validators.required]],
    });
  }
  get name(): FormControl {
    return this.colorForm.get('name') as FormControl;
  }
  get color(): FormControl {
    return this.colorForm.get('color') as FormControl;
  }
  ngOnInit(): void {}

  onAddColor() {
    console.log(this.colorForm);
    if (this.colorForm.valid) {
      let color: Icolor = {
        ...this.colorForm.value,
      };
      this.colorService.addColor(color);
    } else {
      this.colorForm.markAllAsTouched();
    }
  }
}
