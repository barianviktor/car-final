import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFormListComponent } from './article-form-list.component';

describe('ArticleFormListComponent', () => {
  let component: ArticleFormListComponent;
  let fixture: ComponentFixture<ArticleFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleFormListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
