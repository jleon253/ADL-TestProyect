import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyService{

  constructor(private http: HttpClient) {
    console.log('Ready service');
  }

  getData() {
    return this.http.get('assets/data/data-valid.json');
  }


}
