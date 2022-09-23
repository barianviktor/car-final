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
import { Ismartpointdto } from '../interfaces/dto/ismartpointdto';
import { Iimage } from '../interfaces/iimage';
import { Ismartcard } from '../interfaces/ismartcard';
import { Ismartpoint } from '../interfaces/ismartpoint';
import { ImageService } from './image.service';
import { Ismartcarddto } from '../interfaces/dto/ismartcarddto';
@Injectable({
  providedIn: 'root',
})
export class SmartcardService {
  constructor(private http: HttpClient, private imageService: ImageService) {}

  addSmartCard$(smartcard: Ismartcard): Observable<Ismartcarddto> {
    let smartpoints$: Observable<Ismartpointdto>[] = [];
    smartcard.smartpoints.forEach((smartpoint) => {
      smartpoints$.push(this.addSmartPoint$(smartpoint));
    });
    return forkJoin({
      image: this.imageService.addImage$(smartcard.image),
      smartpoints: concat(...smartpoints$).pipe(toArray()),
    }).pipe(
      switchMap((x: any) => {
        let imageid: number = x.image.id;
        let smartpointsId: number[] = [];
        x.smartpoints.forEach((smartpoint: Ismartpointdto) => {
          smartpointsId.push(smartpoint.id!);
        });
        let smartcarddto: Ismartcarddto = {
          image: imageid,
          smartpoints: smartpointsId,
        };
        return this.http.post<Ismartcarddto>(
          environment.api + '/smartcards',
          smartcarddto
        );
      })
    );
  }
  getSmartCard$(id: number): Observable<Ismartcard> {
    return this.http
      .get<Ismartcarddto>(environment.api + '/smartcards/' + id)
      .pipe(
        switchMap((smartcard: Ismartcarddto) => {
          return forkJoin({
            id: of(smartcard.id!),
            image: this.imageService.getImage$(smartcard.image),
            smartpoints: from(smartcard.smartpoints).pipe(
              mergeMap((smartpointid: number) => {
                return this.getSmartPoint$(smartpointid);
              }),
              toArray()
            ),
          });
        }),
        map((fj: { id: number; image: Iimage; smartpoints: Ismartpoint[] }) => {
          let smartPoint: Ismartcard = {
            id: fj.id,
            image: fj.image,
            smartpoints: fj.smartpoints,
          };
          return smartPoint;
        })
      );
  }
  addSmartPoint$(smartpoint: Ismartpoint): Observable<Ismartpointdto> {
    console.log(smartpoint);
    if (smartpoint.image) {
      return this.imageService.addImage$(smartpoint.image).pipe(
        switchMap((x: Iimage) => {
          let smartpointdto: Ismartpointdto = {
            ...smartpoint,
            image: x.id,
          };
          return this.http.post<Ismartpointdto>(
            environment.api + '/smartpoints',
            smartpointdto
          );
        })
      );
    } else {
      return this.http.post<Ismartpointdto>(
        environment.api + '/smartpoints',
        smartpoint
      );
    }
  }
  getSmartPoint$(id: number): Observable<Ismartpoint> {
    return this.http
      .get<Ismartpointdto>(environment.api + '/smartpoints/' + id)
      .pipe(
        switchMap((sp: Ismartpointdto) => {
          return forkJoin({
            smartpoint: of(sp),
            image: sp.image ? this.imageService.getImage$(sp.image) : of(null),
          });
        }),
        map((fj: { smartpoint: Ismartpointdto; image: Iimage | null }) => {
          let smartPoint: Ismartpoint = {
            ...fj.smartpoint,
            image: fj.image,
          };
          return smartPoint;
        })
      );
  }
}
