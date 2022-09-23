import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFormItemComponent } from './article-form-item.component';

describe('ArticleFormItemComponent', () => {
  let component: ArticleFormItemComponent;
  let fixture: ComponentFixture<ArticleFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleFormItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
