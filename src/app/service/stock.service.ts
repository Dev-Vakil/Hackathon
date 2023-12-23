import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  stockUrl=""  

  constructor(private http:HttpClient) { }

  allStocks(){
    return this.http.get(`${this.stockUrl}`);
  }

}
