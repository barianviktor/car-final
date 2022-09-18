import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCartypeComponent } from './new-cartype.component';

describe('NewCartypeComponent', () => {
  let component: NewCartypeComponent;
  let fixture: ComponentFixture<NewCartypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCartypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCartypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
