import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Injectable( {
providedIn: 'root'
})
export class SigninService {
  toki: any;

constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {

}

// login service logic
login(email, password) {
  if (email === 'admin@gmail.com' && password === 'admin') {
    this.storage.set('token', 'asdfghjkl');
  return true;
  } else {
  return false;
  }
}

}
