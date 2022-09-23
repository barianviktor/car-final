import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFormInputComponent } from './model-form-input.component';

describe('ModelFormInputComponent', () => {
  let component: ModelFormInputComponent;
  let fixture: ComponentFixture<ModelFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelFormInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
