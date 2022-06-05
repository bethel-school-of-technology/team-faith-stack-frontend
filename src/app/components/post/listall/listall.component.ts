// import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/models/Post/post.model';
import {UsersService} from 'src/app/services/users.service';

@Component({
  selector: 'app-listall',
  templateUrl: './listall.component.html',
  styleUrls: ['./listall.component.css']
})
export class PostListallComponent implements OnInit {

  public posts: any;

  public newPost: post = {title: '', content: '', UserName: 'loggedInUser', timestamp: new Date};

  constructor(private http: HttpClient, private usersService: UsersService) { }

  ngOnInit(): void {

  this.loadAllPosts();

  }

  loadAllPosts() {
    this.http.get('https://localhost:7102/api/Posts').subscribe(response => {
      console.log(response);
      this.posts = response;
    });
  }

  sendForm() {
    
    this.usersService.createPost(this.newPost).subscribe(response => {
      console.log(response);
      this.loadAllPosts();
    });

  }
}