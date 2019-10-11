import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';

import {ResponseAuth} from '../models/responseAuth';
import {Response} from '../models/response';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  response = new Response();

  constructor(private http: HttpClient, private router: Router) { }


  logout() {
    localStorage.removeItem('data_user');
    this.router.navigate(['/login']);
  }

  logoutRedirect() {
    localStorage.removeItem('data_user');
    window.location.href = '/';
  }

  getDataUser(){
    return JSON.parse(localStorage.getItem('data_user'));
  }

}
