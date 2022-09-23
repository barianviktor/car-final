import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-smartpoint-form',
  templateUrl: './smartpoint-form.component.html',
  styleUrls: ['./smartpoint-form.component.scss'],
})
export class SmartpointFormComponent implements OnInit {
  @Input() smartpoint!: FormGroup;
  @Input() selected: boolean = false;
  @Input() index!: number;
  @Output() deleteSmartpoint = new EventEmitter<number>();
  @Output() selectSmartpoint = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
  castAbsToFormControl(e: AbstractControl): FormControl {
    return e as FormControl;
  }
  onDelete() {
    this.deleteSmartpoint.emit(this.index);
  }
  onSelect() {
    this.selectSmartpoint.emit(this.index);
  }
}
