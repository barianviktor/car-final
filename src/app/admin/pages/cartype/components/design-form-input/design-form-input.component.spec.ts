import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignFormInputComponent } from './design-form-input.component';

describe('DesignFormInputComponent', () => {
  let component: DesignFormInputComponent;
  let fixture: ComponentFixture<DesignFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignFormInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
