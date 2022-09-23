import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imodeldto } from '../interfaces/dto/imodeldto';
import { Imaker } from '../interfaces/imaker';
import { Imodel } from '../interfaces/imodel';
import { MakerService } from './maker.service';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  constructor(private http: HttpClient, private makerService: MakerService) {}
  addModel$(model: Imodeldto) {
    return this.http.post<Imodeldto>(environment.api + '/models', model);
  }
  getModel$(id: number): Observable<Imodel> {
    return this.http.get<Imodeldto>(environment.api + '/models/' + id).pipe(
      switchMap((model: Imodeldto) => {
        return forkJoin({
          maker: this.makerService.getMaker$(model.maker),
          model: of(model),
        });
      }),
      map((fj: { maker: Imaker; model: Imodeldto }) => {
        let model: Imodel = {
          ...fj.model,
          maker: fj.maker,
        };
        return model;
      })
    );
  }
}
