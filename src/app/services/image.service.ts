import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Iimage } from '../interfaces/iimage';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  addImage(image: Iimage) {
    return this.http.post(environment.api + '/images', image).subscribe((x) => {
      console.log(x);
    });
  }
  getImage(id: number) {
    return this.http.get<Iimage>(environment.api + '/images/' + id);
  }
}
