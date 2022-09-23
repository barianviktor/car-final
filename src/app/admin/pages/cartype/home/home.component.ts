import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Icartypedto } from 'src/app/interfaces/dto/icartypedto';
import { ArticleService } from 'src/app/services/article.service';
import { CartypeService } from 'src/app/services/cartype.service';
import { SmartcardService } from 'src/app/services/smartcard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cartypes$: Observable<Icartypedto[]>;
  constructor(
    private cartypeService: CartypeService,
    private articleService: ArticleService,
    private smartcardService: SmartcardService
  ) {
    this.cartypes$ = cartypeService.getCartypes();
    cartypeService.getCartype(1).subscribe((x) => console.log(x));
  }
  ngOnInit(): void {}
}
