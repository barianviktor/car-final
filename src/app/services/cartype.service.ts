import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  concat,
  forkJoin,
  from,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
  toArray,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iarticledto } from '../interfaces/dto/iarticledto';
import { Icartypedto } from '../interfaces/dto/icartypedto';
import { Imodeldto } from '../interfaces/dto/imodeldto';
import { Ismartcarddto } from '../interfaces/dto/ismartcarddto';
import { Iarticle } from '../interfaces/iarticle';
import { Icartype } from '../interfaces/icartype';
import { Idesign } from '../interfaces/idesign';
import { Iimage } from '../interfaces/iimage';
import { Imodel } from '../interfaces/imodel';
import { Ismartcard } from '../interfaces/ismartcard';
import { ArticleService } from './article.service';
import { DesignService } from './design.service';
import { ImageService } from './image.service';
import { ModelService } from './model.service';
import { SmartcardService } from './smartcard.service';

@Injectable({
  providedIn: 'root',
})
export class CartypeService {
  constructor(
    private http: HttpClient,
    private imageService: ImageService,
    private articleService: ArticleService,
    private smartcardService: SmartcardService,
    private modelService: ModelService,
    private designService: DesignService
  ) {}

  //getCartypes():Observable<Icartype[]>{}

  addCartype(
    images: Iimage[],
    articles: Iarticle[],
    smartcards: Ismartcard[],
    model: Imodeldto,
    design: number,
    seats: number,
    title: string,
    titleImage: Iimage
  ) {
    /*   let images$: Observable<Iimage>[] = [];
    let articles$: Observable<Iarticledto>[] = [];
    let smartcards$: Observable<Ismartcarddto>[] = [];
    images.forEach((image) => {
      images$.push(this.imageService.addImage$(image));
    });

    articles.forEach((article) => {
      articles$.push(this.articleService.addArticle$(article));
    });

    smartcards.forEach((smartcard) => {
      smartcards$.push(this.smartcardService.addSmartCard$(smartcard));
    });
 */
    forkJoin({
      articles: from(articles).pipe(
        mergeMap((article: Iarticle) => {
          return this.articleService.addArticle$(article);
        }),
        toArray()
      ),
      images: from(images).pipe(
        mergeMap((image: Iimage) => {
          return this.imageService.addImage$(image);
        }),
        toArray()
      ),
      smartcards: from(smartcards).pipe(
        mergeMap((smartcard: Ismartcard) => {
          return this.smartcardService.addSmartCard$(smartcard);
        }),
        toArray()
      ),
      model: this.modelService.addModel$(model),
      titleImage: this.imageService.addImage$(titleImage),
    })
      .pipe(
        switchMap(
          (fj: {
            articles: Iarticledto[];
            images: Iimage[];
            smartcards: Ismartcarddto[];
            model: Imodeldto;
            titleImage: Iimage;
          }) => {
            console.log(fj);

            let articleIds: number[] = [];
            let imagesIds: number[] = [];
            let smartcardsIds: number[] = [];
            fj.articles.forEach((article) => {
              articleIds.push(article.id!);
            });
            fj.images.forEach((image) => {
              imagesIds.push(image.id!);
            });
            fj.smartcards.forEach((smartcard) => {
              smartcardsIds.push(smartcard.id!);
            });
            let cartypedto: Icartypedto = {
              articles: articleIds,
              images: imagesIds,
              smartcards: smartcardsIds,
              model: fj.model.id!,
              design: design,
              seats: seats,
              title: title,
              titleImage: fj.titleImage.id!,
            };
            return this.http.post(environment.api + '/cartypes', cartypedto);
          }
        )
      )
      .subscribe((x) => console.log(x));
  }
  getCartypes(): Observable<Icartypedto[]> {
    return this.http.get<Icartypedto[]>(environment.api + '/cartypes');
  }
  getCartype(id: number): Observable<any> {
    return this.http.get<Icartypedto>(environment.api + '/cartypes/' + id).pipe(
      switchMap((cartype: Icartypedto) => {
        return forkJoin({
          cartype: of(cartype),
          articles: from(cartype.articles).pipe(
            mergeMap((index: number) => {
              return this.articleService.getArticle$(index);
            }),
            toArray()
          ),
          smartcards: from(cartype.smartcards).pipe(
            mergeMap((index: number) => {
              return this.smartcardService.getSmartCard$(index);
            }),
            toArray()
          ),
          images: from(cartype.images).pipe(
            mergeMap((index: number) => {
              return this.imageService.getImage$(index);
            }),
            toArray()
          ),
          design: this.designService.getDesign$(cartype.design),
          titleImage: this.imageService.getImage$(cartype.titleImage),
          model: this.modelService.getModel$(cartype.model),
        });
      }),
      map(
        (fj: {
          cartype: Icartypedto;
          articles: Iarticle[];
          smartcards: Ismartcard[];
          images: Iimage[];
          titleImage: Iimage;
          model: Imodel;
          design: Idesign;
        }) => {
          let cartype: Icartype = {
            id: fj.cartype.id!,
            articles: fj.articles,
            smartcards: fj.smartcards,
            seats: fj.cartype.seats,
            title: fj.cartype.title,
            titleImage: fj.titleImage,
            model: fj.model,
            design: fj.design,
            images: fj.images,
          };
          return cartype;
        }
      )
    );
  }
}
