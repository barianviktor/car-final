import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Idesign } from 'src/app/interfaces/idesign';
import { DesignService } from 'src/app/services/design.service';

@Component({
  selector: 'app-design-form-input',
  templateUrl: './design-form-input.component.html',
  styleUrls: ['./design-form-input.component.scss'],
})
export class DesignFormInputComponent implements OnInit {
  designs$: Observable<Idesign[]>;
  @Input() designForm!: FormControl;
  constructor(private designService: DesignService) {
    this.designs$ = designService.getDesigns();
  }
  setDesign(id: number | undefined) {
    this.designForm.setValue(id);
  }
  ngOnInit(): void {}
}
