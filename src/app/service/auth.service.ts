import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';
import {SignInForm} from "../model/SignInForm";
import {JwtResponse} from "../model/JwtResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //API LOCAL
  private API_SIGNUP = environment.API_LOCAL + 'signup';
  private API_SIGNIN = environment.API_LOCAL + 'signin';
  //API SERVER
  // private API_SIGNUP = environment.API_SERVER+'signup';
  // private API_SIGNIN = environment.API_SERVER+'signin';
  data: boolean;
  constructor(private http: HttpClient) { }
  signUp(signUp: SignUpForm): Observable<any>{
    return this.http.post<any>(this.API_SIGNUP,signUp);
  }
  signIn(signIn: SignInForm): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.API_SIGNIN, signIn)
  }
  setData(data){
    this.data = data;
  }
  getData(): boolean{
    return this.data;
  }
}
