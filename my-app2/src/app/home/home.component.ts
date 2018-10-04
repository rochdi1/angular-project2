import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string;
  constructor(private route: ActivatedRoute) {
    // get email from Route
    this.email = this.route.snapshot.paramMap.get('email');
   }

  ngOnInit() {
  }

}
