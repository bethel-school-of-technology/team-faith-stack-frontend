import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
  
  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {
    invalidLogin: boolean;
    //credentials: loginModel = {username:'', password:''};
    loginForm = {
      username: "",
      password: ""
    }
    token: string = '';
    error: string = '';
  
    constructor(private usersService: UsersService, private router: Router, private http: HttpClient) { }
  
    ngOnInit(): void { }
  
  onLogin() {
    console.log(this.loginForm.username + "logged in successfully!");
    this.usersService.loginUser(this.loginForm.username, this.loginForm.password)
    .subscribe({
      next: res => {
        const token = res.token;
        localStorage.setItem("jwt", token); 
        this.invalidLogin = false; 
        this.router.navigate(["/user/post"]);
      },
      error: (err: HttpErrorResponse) => this.invalidLogin = true
    })
      /*.subscribe(
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
      );*/
  }
}