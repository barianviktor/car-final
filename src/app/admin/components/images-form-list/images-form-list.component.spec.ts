import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesFormListComponent } from './images-form-list.component';

describe('ImagesFormListComponent', () => {
  let component: ImagesFormListComponent;
  let fixture: ComponentFixture<ImagesFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesFormListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
