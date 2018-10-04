import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../Services/callapi.service';

@Component({
  selector: 'app-callapihttp',
  templateUrl: './callapihttp.component.html',
  styleUrls: ['./callapihttp.component.css']
})
export class CallapihttpComponent implements OnInit {

  constructor(private call: CallapiService) { }

  ngOnInit() {
  }

  loaddata() {
    this.call.getPosts().subscribe(
      next => {
        console.log(next);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('Done!');
      }
    );
  }
}
