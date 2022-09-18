import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imaker } from '../interfaces/imaker';

@Injectable({
  providedIn: 'root',
})
export class MakerService {
  constructor(private http: HttpClient) {}

  addMaker(maker: Imaker) {
    return this.http.post(environment.api + '/makers', maker).subscribe((x) => {
      console.log(x);
    });
  }
  getMakers(): Observable<Imaker[]> {
    return this.http.get<Imaker[]>(environment.api + '/makers');
  }
}
