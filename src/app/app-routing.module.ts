import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Components/admin/add.admin/add.component';
import { DeleteComponent } from './Components/admin/delete.admin/delete.component';
import { EditComponent } from './Components/admin/edit.admin/edit.component';
import { ViewComponent } from './Components/admin/view.admin/view.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { CreateComponent } from './Components/post/create.post/create.component';
import { DeleteComponent } from './Components/post/delete.post/delete.component';
import { EditComponent } from './Components/post/edit.post/edit.component';
import { ListallComponent } from './Components/post/listall.post/listall.component';
import { CreateComponent } from './Components/create.therapist/create.component';
import { EditComponent } from './Components/therapist/edit.therapist/edit.component';
import { ListallComponent } from './Components/therapist/listall.therapist/listall.component';
import { ListoneComponent } from './Components/therapist/listone.therapist/listone.component';
import { EditComponent } from './Components/user/edit.user/edit.component';
import { PostComponent } from './Components/user/post.user/post.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
