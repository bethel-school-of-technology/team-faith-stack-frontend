import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { Router, RouterModule } from '@angular/router';
import { AdminAddComponent } from './components/admin/add/add.component';
import { AdminDeleteComponent } from './components/admin/delete/delete.component';
import { AdminEditComponent } from './components/admin/edit/edit.component';
import { AdminViewComponent } from './components/admin/view/view.component';
import { PostCreateComponent } from './components/post/create/create.component';
import { PostDeleteComponent } from './components/post/delete/delete.component';
import { PostEditComponent } from './components/post/edit/edit.component';
import { PostListallComponent } from './components/post/listall/listall.component';
import { TherapistCreateComponent } from './components/therapist/create/create.component';
import { TherapistEditComponent } from './components/therapist/edit/edit.component';
import { TherapistListoneComponent } from './components/therapist/listone/listone.component';
import { TherapistListallComponent } from './components/therapist/listall/listall.component';
import { UserEditComponent } from './components/user/edit/edit.component';
import { UserPostComponent } from './components/user/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDeleteComponent,
    PostListallComponent,
    TherapistListoneComponent,
    AdminEditComponent,
    PostCreateComponent,
    UserPostComponent,
    AdminDeleteComponent,
    AdminViewComponent,
    AdminAddComponent,
    PostEditComponent,
    TherapistCreateComponent,
    TherapistEditComponent,
    TherapistListallComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule,
    Router,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
