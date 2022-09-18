import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ArticleForm } from '../../util/models/ArticleForm';

@Component({
  selector: 'app-article-form-item',
  templateUrl: './article-form-item.component.html',
  styleUrls: ['./article-form-item.component.scss'],
})
export class ArticleFormItemComponent implements OnInit {
  @Input() articleForm!: ArticleForm;
  @Input() index!: number;
  @Output() removeArticle: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}
  get title(): FormControl {
    return this.articleForm.get('title') as FormControl;
  }
  get description(): FormControl {
    return this.articleForm.get('description') as FormControl;
  }
  get image(): FormControl {
    return this.articleForm.get('image') as FormControl;
  }
  ngOnInit(): void {
    console.log(this.articleForm);
  }
  onRemoveArticle() {
    this.removeArticle.emit(this.index);
  }
}
