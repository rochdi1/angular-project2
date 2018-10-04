import { Inject, Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  token: any;

  constructor(private router: Router, @Inject(SESSION_STORAGE) private storage: StorageService) { }

  canActivate() {

    if ( this.storage.get('token') ) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }

  }
}
