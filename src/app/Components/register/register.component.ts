import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public users: any;

  public newUser: any = {firstName: '', lastName: '', userName: '', email: '', password: ''};
  route: any;

  // var to hold new user info
  //newUser: user = new user();
  //UsersService: any;

  constructor(private router: Router, private usersService: UsersService, private http: HttpClient) { }

  ngOnInit(): void {

  }

  register() {
    this.usersService.addUser(this.newUser).subscribe(response => {
      console.log(response);
      this.router.navigate(["login"])
    },
      (error: HttpErrorResponse) => {
      alert(error.message);
      });
  }
    /*this.usersService.addUser(this.newUser)
    .subscribe
      (response => {
       this.router.navigate(["login"])
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
    }*/
} 


