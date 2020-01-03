import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { AuthService } from './auth.service';
import {environment} from '../../environments/environment';
import {ResponseOptions} from '../models/responseMenu';
import {ResponseAccesos} from '../models/responseAccesos';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data_user: any;

  static getDataUser() {
    // console.log(localStorage.getItem('data_user'));
    return JSON.parse(localStorage.getItem('data_user'));
  }

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  getItem = name => localStorage.getItem(name);
  getFindIdStudent(id){
    const _headers = new HttpHeaders({
  
    });
    return this.http.get<any>(environment.api.url_student_find_all +'/'+id, {headers: _headers});
  }
  getGerenateReportStudent(id){
    const _headers = new HttpHeaders({
  
    });
    
const httpOptions = {
  'responseType'  : 'arraybuffer' as 'json'
   //'responseType'  : 'blob' as 'json'        //This also worked
};

return this.http.get<any>(environment.api.url_student_report.replace("{id}",id), httpOptions);
    // return this.http.get<any>(environment.api.url_student_report.replace("{id}",id), {headers: _headers});
  }

  getAllStudent(){
    const _headers = new HttpHeaders({
  
    });
    return this.http.get<any>(environment.api.url_student_find_all, {headers: _headers});
  }
  login(user:any){
    const _headers = new HttpHeaders({
  
    });
    return this.http.post<any>(environment.api.url_user_login,user, {headers: _headers});
  }

  insert(user:any){
    const _headers = new HttpHeaders({
  
    });
    return this.http.post<any>(environment.api.url_user_insert,user, {headers: _headers});
  }

  insertStudent(student:any){
    const _headers = new HttpHeaders({
  
    });
    return this.http.post<any>(environment.api.url_student_insert,student, {headers: _headers});
  }

  

}
