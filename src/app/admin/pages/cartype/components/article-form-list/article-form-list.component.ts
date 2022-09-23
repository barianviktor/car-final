import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { IArticleForm } from '../../../../util/interfaces/article-form.interface';
import { ArticleForm } from '../../../../util/models/ArticleForm';

@Component({
  selector: 'app-article-form-list',
  templateUrl: './article-form-list.component.html',
  styleUrls: ['./article-form-list.component.scss'],
})
export class ArticleFormListComponent implements OnInit {
  @Input() articles!: FormArray;
  constructor() {}

  ngOnInit(): void {}
  castArticle(article: any) {
    return article as ArticleForm;
  }
  onAddArticle() {
    let articleFormGroup: ArticleForm = new ArticleForm();
    this.articles.push(articleFormGroup);
  }
  removeItem(index: number) {
    this.articles.removeAt(index);
  }
}
