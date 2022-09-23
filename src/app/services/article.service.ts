import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iarticledto } from '../interfaces/dto/iarticledto';
import { Iarticle } from '../interfaces/iarticle';
import { Iimage } from '../interfaces/iimage';
import { ImageService } from './image.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient, private imageService: ImageService) {}
  addArticle$(article: Iarticle): Observable<Iarticledto> {
    if (article.image) {
      return this.imageService.addImage$(article.image).pipe(
        switchMap((x: Iimage) => {
          let articledto: Iarticledto = {
            ...article,
            image: x.id,
          };
          return this.http.post<Iarticledto>(
            environment.api + '/articles',
            articledto
          );
        })
      );
    } else {
      return this.http.post<Iarticledto>(
        environment.api + '/articles',
        article
      );
    }
  }
  getArticle$(id: number) {
    return this.http.get<Iarticledto>(environment.api + '/articles/' + id).pipe(
      switchMap((articledto: Iarticledto) => {
        return forkJoin({
          article: of(articledto),
          image: articledto.image
            ? this.imageService.getImage$(articledto.image)
            : of(null),
        });
      }),
      map((fj: { article: Iarticledto; image: Iimage | null }) => {
        let article: Iarticle = {
          ...fj.article,
          image: fj.image,
        };
        return article;
      })
    );
  }
}
