import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://3.84.236.236:3000/tecnico';
  private URL2 = 'http://3.84.236.236:3000/supervisor';
  constructor(private http: HttpClient, private router: Router) { }

  signIn(user: any) {
    return this.http.post<any>(this.URL + '/signIn', user);
  }

  signInS(user: any) {
    return this.http.post<any>(this.URL2 + '/signIn', user);
  }

  getById(id:any) {
    return this.http.get<any>(this.URL2+'/'+id);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  

}