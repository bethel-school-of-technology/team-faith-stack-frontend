import { HttpClient } from '@angular/common/http';
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

  // getUser: user = new user();

  public getUser: any = {firstName: '', lastName: '', userName: '', email: ''};
  userID: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.loadUser(this.route.snapshot.paramMap.get('id'))

    this.usersService.getOneUser(this.userID).subscribe(response => {
      this.getUser = response;
    })
  }

  loadUser(userID: string) {
    this.http.get('https://localhost:7102/api/Users' + this.userID).subscribe(response => {
      console.log(response);
      this.getUser = response;
    });
  }

}
