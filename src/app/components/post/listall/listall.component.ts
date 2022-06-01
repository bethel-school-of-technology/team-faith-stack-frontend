// import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listall',
  templateUrl: './listall.component.html',
  styleUrls: ['./listall.component.css']
})
export class PostListallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// export class PostListallComponent implements OnInit {

//   constructor(private httpService: HttpClient) { }
//   posts: string[];
//   ngOnInit(): void {
//     this.httpService.get('').subscribe(
//       data => {
//         this.posts = data as string[];
//       }
//     );
//   }