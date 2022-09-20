import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartpointFormComponent } from './smartpoint-form.component';

describe('SmartpointFormComponent', () => {
  let component: SmartpointFormComponent;
  let fixture: ComponentFixture<SmartpointFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartpointFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartpointFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
