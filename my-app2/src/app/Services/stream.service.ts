import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  dataStream: Observable<string>;

  constructor() { }

  createStream() {
    this.dataStream = new Observable(observer => {
      setTimeout(() => {
        observer.next('Value1');
      }, 2000);

      setTimeout(() => {
        observer.next('Value2');
      }, 3000);

      setTimeout(() => {
        observer.next('Value3');
      }, 5000);

      setTimeout(() => {
        observer.complete();
      }, 5000);
    });
    return this.dataStream;
  }

}
