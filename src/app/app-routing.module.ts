import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: "admin/add", component: AdminAddComponent },

  { path: "admin/delete", component: AdminDeleteComponent },

  { path: "admin/edit", component: AdminEditComponent},

  { path: "admin/view", component: AdminViewComponent},

  { path: "post/create", component: PostCreateComponent},

  { path: "post/delete", component: PostDeleteComponent},

  { path: "post/edit", component: PostEditComponent},

  { path: "post/listall", component: PostListallComponent},

  { path: "therapist/create", component: TherapistCreateComponent},

  { path: "therapist/edit", component: TherapistEditComponent},

  { path: "therapist/listall", component: TherapistListallComponent},

  { path: "therapist/listone", component: TherapistListoneComponent},

  { path: "user/edit", component: UserEditComponent},

  { path: "user/post", component: UserPostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
