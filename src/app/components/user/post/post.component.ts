import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { parse } from 'path';
import { map, Subscription } from 'rxjs';
import { user } from 'src/app/models/user/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class UserPostComponent implements OnInit {

  userID: number = null;
  private sub: Subscription;
  user: user = null;


  constructor(private actRoute: ActivatedRoute, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.actRoute.params.subscribe(params => {
      this.userID = parseInt(params['id']);
      this.usersService.findOne(this.userID).pipe(
        map((user: user) => this.user = user)
      ).subscribe()
    });

  // ngOnDestroy() {
  //  this.sub.unsubscribe();
  // }

  }

}
