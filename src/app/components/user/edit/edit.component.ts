import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/models/user/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class UserEditComponent implements OnInit {

  editUser: user = new user();

  userID: number; 

  constructor(private actRoute: ActivatedRoute, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.userID = parseInt(this.actRoute.snapshot.paramMap.get("userId"));

    this.usersService.getOneUser(this.userID).subscribe(response => {
      this.editUser = response;
    })
  }

  edittedUser(){
    this.usersService.updateUser(this.userID, this.editUser)
    .subscribe(
      response => {
      this.router.navigate(["./post"])
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
    });
  }

}
