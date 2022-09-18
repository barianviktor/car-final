import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Imaker } from 'src/app/interfaces/imaker';
import { MakerService } from 'src/app/services/maker.service';

@Component({
  selector: 'app-new-maker',
  templateUrl: './new-maker.component.html',
  styleUrls: ['./new-maker.component.scss'],
})
export class NewMakerComponent implements OnInit {
  makerForm: FormGroup;
  constructor(
    private makerService: MakerService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.makerForm = fb.group({
      name: ['', [Validators.required]],
      icon_path: ['', [Validators.required]],
    });
  }
  get name(): FormControl {
    return this.makerForm.get('name') as FormControl;
  }
  get icon_path(): FormControl {
    return this.makerForm.get('icon_path') as FormControl;
  }
  onAddMaker() {
    if (this.makerForm.valid) {
      let maker: Imaker = {
        ...this.makerForm.value,
      };
      this.makerService.addMaker(maker);
    } else {
      this.makerForm.markAllAsTouched();
    }
  }
  ngOnInit(): void {}
}
