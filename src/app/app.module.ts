import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { PostCreateComponent } from './Components/post/create/create.component';
import { PostDeleteComponent } from './Components/post/delete/delete.component';
import { PostEditComponent } from './Components/post/edit/edit.component';
import { PostListallComponent } from './Components/post/listall/listall.component';
import { TherapistListallComponent } from './Components/therapist/listall/listall.component';
import { UserEditComponent } from './Components/user/edit/edit.component';
import { UserPostComponent } from './Components/user/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDeleteComponent,
    PostListallComponent,
    PostCreateComponent,
    UserPostComponent,
    PostEditComponent,
    TherapistListallComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
