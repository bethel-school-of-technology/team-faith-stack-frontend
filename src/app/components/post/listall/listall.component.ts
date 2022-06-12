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

  ListOfPosts: post = new post; 

  public posts: any;

  public newPost: any = {title: '', content: '', userName: 'loggedInUser', timestamp: new Date};
  route: any;

  constructor(private http: HttpClient, private usersService: UsersService) { }

  ngOnInit(): void {
      
  this.loadAllPosts();

  }



// get and show all posts
  loadAllPosts() {
    this.http.get('https://localhost:7102/api/Posts').subscribe(response => {
      console.log(response);
      this.posts = response;
    });
  }

// create a new post
  sendForm() {
    
    this.usersService.createPost(this.newPost).subscribe(response => {
      console.log(response);
      this.loadAllPosts();
    });

  }

  deletePost(deletePostId:number){
    this.usersService.deletePost(deletePostId).subscribe(response =>{
      this.ngOnInit();
    })

  }
    
  onLogout() {
    localStorage.clear();
    this.usersService.isUserLoggedIn = false;
    console.log("Logged out, isUserLoggedIn: " + this.usersService.isUserLoggedIn);
    }
}

