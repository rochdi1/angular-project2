import { StreamService } from './../Services/stream.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-observable',
  templateUrl: './my-observable.component.html',
  styleUrls: ['./my-observable.component.css']
})
export class MyObservableComponent implements OnInit {

  constructor(private myStream: StreamService) { }

  ngOnInit() {
  }

  loadme() {
    this.myStream.createStream().subscribe(
      next => {
        console.log(next);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('done');
      }
    );
  }
}
