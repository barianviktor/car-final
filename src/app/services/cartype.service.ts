import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icartype } from '../interfaces/icartype';

@Injectable({
  providedIn: 'root',
})
export class CartypeService {
  constructor(private http: HttpClient) {}

  //getCartypes():Observable<Icartype[]>{}

  addCartype(cartype: Icartype) {
    console.log(cartype);
  }
}
