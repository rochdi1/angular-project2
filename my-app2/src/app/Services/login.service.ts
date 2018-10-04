import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  name: string;
  constructor() { }

  login(user, pass){
    if(user == "admin" && pass == "admin") {
      return true;
    } else {
      return false;
    }
  }

  load() {
    var data = [];
    for(let i = 0;i < 10; i++) {
      var item = {id: i, name: "name" + i};
      data.push(item);

    }
    return data;
  }


}
