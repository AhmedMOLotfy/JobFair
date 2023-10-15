import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface UserDto {
  username: string;
  email:string;
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = "https://localhost:5001/api/";
  constructor(private http: HttpClient) { }

  register(email: string, username: string, password: string){
    return this.http.post<UserDto>(this.baseURL + "account/register",{
      email: email,username: username, password: password
    });
  }

  login(email: string, password: string){
    return this.http.post<UserDto>(this.baseURL + "account/login",{
      email: email, password: password
    });
  }

}
