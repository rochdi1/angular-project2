import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  postUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  // Call api for exp: from https://jsonplaceholder.typicode.com/


  getPosts() {
    return this.http.get(this.postUrl);
  }


}
