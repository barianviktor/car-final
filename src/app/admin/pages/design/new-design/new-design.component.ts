import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Idesign } from 'src/app/interfaces/idesign';
import { DesignService } from 'src/app/services/design.service';

@Component({
  selector: 'app-new-design',
  templateUrl: './new-design.component.html',
  styleUrls: ['./new-design.component.scss'],
})
export class NewDesignComponent implements OnInit {
  designForm: FormGroup;
  constructor(private designService: DesignService, private fb: FormBuilder) {
    this.designForm = fb.group({
      name: ['', [Validators.required]],
    });
  }
  get name() {
    return this.designForm.get('name') as FormControl;
  }
  ngOnInit(): void {}
  onSubmit() {
    if (this.designForm.valid) {
      let design: Idesign = {
        name: this.name.value,
      };
      this.designService.addDesign(design);
    }
  }
}
