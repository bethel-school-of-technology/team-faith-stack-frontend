import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { post } from 'src/app/models/Post/post.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class PostEditComponent implements OnInit {

  public editPost: any = {title: '', content: '', UserName: 'loggedInUser', timestamp: new Date};


  constructor(private http: HttpClient, private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadPost(this.route.snapshot.paramMap.get('id'))
  }

  loadPost(postId: string) {
    this.http.get('https://localhost:7102/api/Posts/' + postId).subscribe(response => {
      console.log(response);
      this.editPost = response;
    });
  }

  sendForm() {
    
    this.usersService.editPost(this.editPost.postId, this.editPost).subscribe(response => {
      console.log(response);
      this.router.navigate(['post/listall']);
    });
  }

}
