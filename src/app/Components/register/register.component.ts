import { HttpErrorResponse } from '@angular/common/http';
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

  // var to hold new user info
  newUser: user = new user();

  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {

  }

  register() {
    this.usersService.addUser(this.newUser)
    .subscribe
      (response => {
       this.router.navigate(["login"])
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }
}
