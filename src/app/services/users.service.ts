import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { user } from '../models/user/user.model'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
// Code for authentication taken from: https://developer.okta.com/blog/2019/05/16/angular-authentication-jwt#add-an-angular-client-with-jwt-authentication
export class UsersService implements CanActivate {

  // environment.apiBaseUrlUsers: 'http://localhost:8080'
  apiServerUrl: string = environment.apiBaseUrlUsers;

  isUserLoggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router,  private jwtHelper: JwtHelperService) { }

  // checks to see if the user is logged in and routes them accordingly
  // based on code by JavaInUse: https://www.youtube.com/watch?v=QQxqHT7yhHc&t=104s
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem("jwt");
      if (token && !this.jwtHelper.isTokenExpired(token)){
        return true;
      }
      this.router.navigate(["login"]);
      return false;
    /*if (this.isUserLoggedIn) {
      return true;
    }
    else {
      alert("Please login or create a new account!");
      this.router.navigate(['login']);
      return false;
    }*/
  }

  //export class AuthGuard implements CanActivate  {
  //constructor(private router:Router, private jwtHelper: JwtHelperService){}
  
    //canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      //const token = localStorage.getItem("jwt");
      //if (token && !this.jwtHelper.isTokenExpired(token)){
        //return true;
      //}
      //this.router.navigate(["login"]);
      //return false;
    //}
  //}

  // for new users to register
  addUser(newUser: user) {
    return this.http.post(`https://localhost:7102/api/Users`, newUser);
  } 
  
  // for user to login
  loginUser(username: string, password: string): Observable<any> {
    let loginInfo = {
      username,
      password
    }
    return this.http.post<any>(`https://localhost:7102/api/Login`, loginInfo, { observe: 'response' })
  } 

  // gets user data from backend to display on user's Home page
  getUserInfo(): Observable<any> {
    let myHeaders = {
      Authorization: " " + localStorage.getItem("jwt")
    }
    return this.http.get(`${this.apiServerUrl}/api/users/find/username`, {headers: myHeaders});
  }

  isLoggedIn(): boolean {
    if(!localStorage.getItem("jwt")) {
      window.alert("You are not logged in");
      this.router.navigate(["login"]);
      return false;
    }
    else {
      this.isUserLoggedIn = true;
      console.log("isUserLoggedIn: " + this.isUserLoggedIn);
      return true;
    }
  }
}
