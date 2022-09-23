import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCardFormComponent } from './smart-card-form.component';

describe('SmartCardFormComponent', () => {
  let component: SmartCardFormComponent;
  let fixture: ComponentFixture<SmartCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartCardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
