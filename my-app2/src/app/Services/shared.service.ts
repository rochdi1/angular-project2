import {Injectable } from '@angular/core';

@Injectable( {
providedIn: 'root'
})
export class SharedService {
user: string;
token: string;
login: boolean;

constructor() {}

public getUser() {return this.user; }
public getToken() {return this.token; }
public getLogin() {return this.login; }

public setUser(data) {this.user = data; }
public setToken(data) {this.token = data; }
public setLogin(data) {this.login = data; }

}
