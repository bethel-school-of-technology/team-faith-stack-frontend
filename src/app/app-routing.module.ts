import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { PostCreateComponent } from './Components/post/create/create.component';
import { PostDeleteComponent } from './Components/post/delete/delete.component';
import { PostEditComponent } from './Components/post/edit/edit.component';
import { PostListallComponent } from './Components/post/listall/listall.component';
import { TherapistListallComponent } from './Components/therapist/listall/listall.component';
import { UserEditComponent } from './Components/user/edit/edit.component';
import { UserPostComponent } from './Components/user/post/post.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  
  { path: 'login', component: LoginComponent},

  { path: "post/create", component: PostCreateComponent},

  { path: "post/delete", component: PostDeleteComponent},

  { path: "post/edit", component: PostEditComponent},

  { path: "post/listall", component: PostListallComponent},

  { path: "therapist/listall", component: TherapistListallComponent},

  { path: "user/edit/:id", component: UserEditComponent},

  { path: "user/post/:id", component: UserPostComponent},

  { path: "", redirectTo: "welcome", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
