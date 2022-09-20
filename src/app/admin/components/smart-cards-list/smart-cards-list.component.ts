import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { SmartcardForm } from '../../util/models/SmartcardForm';

@Component({
  selector: 'app-smart-cards-list',
  templateUrl: './smart-cards-list.component.html',
  styleUrls: ['./smart-cards-list.component.scss'],
})
export class SmartCardsListComponent implements OnInit {
  @Input() smartcards!: FormArray;

  constructor() {}

  ngOnInit(): void {}
  addSmartcard() {
    this.smartcards.push(new SmartcardForm());
  }
  removeSmartcard(index: number) {
    this.smartcards.removeAt(index);
  }
  castAbsToFg(e: AbstractControl): FormGroup {
    return e as FormGroup;
  }
}
