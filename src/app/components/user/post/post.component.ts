import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { ActivatedRoute, Router } from '@angular/router';
// import { parse } from 'path';
// import { map, Subscription } from 'rxjs';
import { user } from 'src/app/models/user/user.model';
import { UsersService } from 'src/app/services/users.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class UserPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
