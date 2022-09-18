import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormColorInputComponent } from './form-color-input.component';

describe('FormColorInputComponent', () => {
  let component: FormColorInputComponent;
  let fixture: ComponentFixture<FormColorInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormColorInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormColorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
