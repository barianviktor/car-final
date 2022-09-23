import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartpointIconComponent } from './smartpoint-icon.component';

describe('SmartpointIconComponent', () => {
  let component: SmartpointIconComponent;
  let fixture: ComponentFixture<SmartpointIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartpointIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartpointIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
