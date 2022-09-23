import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icolor } from '../interfaces/icolor';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor(private http: HttpClient) {}

  addColor(color: Icolor) {
    return this.http.post(environment.api + '/colors', color).subscribe((x) => {
      console.log(x);
    });
  }
  getColors(): Observable<Icolor[]> {
    return this.http.get<Icolor[]>(environment.api + '/colors');
  }
  getColor$(id: number): Observable<Icolor> {
    return this.http.get<Icolor>(environment.api + '/colors/' + id);
  }
}
