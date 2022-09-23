import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Idesign } from '../interfaces/idesign';
import { Iimage } from '../interfaces/iimage';

@Injectable({
  providedIn: 'root',
})
export class DesignService {
  constructor(private http: HttpClient) {}
  addDesign(design: Idesign) {
    return this.http
      .post(environment.api + '/designs', design)
      .subscribe((x) => {
        console.log(x);
      });
  }
  getDesign$(id: number) {
    return this.http.get<Idesign>(environment.api + '/designs/' + id);
  }
  getDesigns() {
    return this.http.get<Idesign[]>(environment.api + '/designs');
  }
}
