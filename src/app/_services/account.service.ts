import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map} from "rxjs";

export interface UserDto {
  username: string;
  email:string;
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseURL = "https://localhost:5001/api/";

  private currentUserSource =
      new BehaviorSubject<UserDto | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  register(email: string, username: string, password: string){
    return this.http.post<UserDto>(this.baseURL + "account/register",{
      email: email,username: username, password: password
    });
  }

  login(email: string, password: string){
    return this.http.post<UserDto>(this.baseURL + "account/login",{
      email: email, password: password
    }).pipe(
        map((user: UserDto)=> {
            if(user){
              localStorage.setItem("user",JSON.stringify(user));
              this.currentUserSource.next(user);
            }
        })
    );
  }

  logout(){
    localStorage.removeItem("user");
    this.currentUserSource.next(null);

  }

  // store current (user) in currentUserSource
  setCurrentUser(user: UserDto){
    this.currentUserSource.next(user);
    console.log("This is the service and it is data" + user);
  }


}
