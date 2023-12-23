import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authUrl=""  

  constructor(private http:HttpClient) { }

  login(credentials:object){
    return this.http.post(`${this.authUrl}/login`,credentials);
  }

  register(credentials:object){
    return this.http.post(`${this.authUrl}/register`,credentials);
  }

  saveToken(token:string, roles:any){
    localStorage.setItem("token",token);
    localStorage.setItem("roles",roles);
  }

  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token === null || token === undefined || token === ''){
      return false;
    }else{
      return true;
    }
  }

  logout(){
    localStorage.setItem("token",'');
    localStorage.setItem("roles",'');
  }

}
