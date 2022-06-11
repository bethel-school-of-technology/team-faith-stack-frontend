import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/models/user/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class UserPostComponent implements OnInit {

  currentUser: user = new user();

  // listOfUsers: user = [];
  
  // public currentUser: any = {firstName: '', lastName: '', userName: '', email: ''};
  

  userID: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
   
  //this.userID = parseInt(this.route.snapshot.paramMap.get("userId"));

    this.usersService.getUserInfo().subscribe(response => {
      this.currentUser = response;
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
 // }
    

  }
  onLogout() {
    localStorage.clear();
    this.usersService.isUserLoggedIn = false;
    console.log("Logged out, isUserLoggedIn: " + this.usersService.isUserLoggedIn);
}}
