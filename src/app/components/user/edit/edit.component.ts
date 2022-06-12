import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/models/user/user.model';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class UserEditComponent implements OnInit {

 // editUser: user = new user();
 
  public editUser: any = {firstName: '', lastName: '', userName: '', email: '', password: ''};

  userID: number; 
  
  

  constructor(private http: HttpClient, private route: ActivatedRoute, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
   // this.userID = parseInt(this.actRoute.snapshot.paramMap.get("userId"));
    this.loadUser(this.route.snapshot.paramMap.get('id'))

    this.usersService.getOneUser(this.userID).subscribe(response => {
      this.editUser = response;
    })
  }

  loadUser(userID: string) {
    this.http.get('https://localhost:7102/api/Users/' + this.userID).subscribe(response => {
      console.log(response);
      this.editUser = response;
    });
  }

  edittedUser(){
    //tried this code
    /*localStorage.getItem('userId')
    this.usersService.updateUser(localStorage.getItem('userId', token)).subscribe(response => {
      console.log(response);
      this.currentUser = response;
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }*/
    this.usersService.updateUser(this.editUser.userID, this.editUser)
    .subscribe(
      response => {
      this.router.navigate(["./post"])
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
    });
  }

}