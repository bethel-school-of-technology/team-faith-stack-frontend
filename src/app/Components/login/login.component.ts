import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
  
  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {
    //invalidLogin: boolean;
    //credentials: loginModel = {username:'', password:''};
    loginForm = {
      username: "",
      password: ""
    }
    token: string = '';
    error: string = '';
  
    constructor(private UsersService: UsersService, private router: Router) { }
    //constructor(private router: Router, private http: HttpClient) { }
    ngOnInit(): void { }
  
    //login = ( form: NgForm) => {
      //if (form.valid) {
        //this.http.post<AuthenticatedResponse>("https://localhost:7102/api/Users/login", this.credentials, {
          //headers: new HttpHeaders({ "Content-Type": "application/json"})
        //})
        //.subscribe({
          //next: (response: AuthenticatedResponse) => {
            //const token = response.token;
            //localStorage.setItem("jwt", token); 
            //this.invalidLogin = false; 
            //this.router.navigate(["/"]);
          //},
          //error: (err: HttpErrorResponse) => this.invalidLogin = true
        //})
      //}
  onLogin() {
    console.log(this.loginForm.username + "logged in successfully!");
    this.UsersService.loginUser(this.loginForm.username, this.loginForm.password)
      .subscribe(
        res => {
          this.token = res.headers.get("Authorization");
          localStorage.setItem("token", this.token);
          this.UsersService.isLoggedIn();
          this.router.navigate(["home"]);
        },
        error => {
          this.error = "Unable to login with username and password."
          console.log("Login unsuccessful.");
          alert(this.error);
        }
      );
  }
}