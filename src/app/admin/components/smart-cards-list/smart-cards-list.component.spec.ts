import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCardsListComponent } from './smart-cards-list.component';

describe('SmartCardsListComponent', () => {
  let component: SmartCardsListComponent;
  let fixture: ComponentFixture<SmartCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartCardsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
