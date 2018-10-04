import {Injectable} from '@angular/core';

@Injectable( {
providedIn: 'root'
})
export class SigninService {

constructor() {}
// login service logic
login(email, password) {
  if (email === 'admin@gmail.com' && password === 'admin') {
  return true;
  } else {
  return false;
  }
}

}
