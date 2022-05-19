import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/admin/add/add.component';
import { DeleteComponent } from './components/admin/delete/delete.component';
import { EditComponent } from './components/admin/edit/edit.component';
import { ViewComponent } from './components/admin/view/view.component';
import { CreateComponent } from './components/post/create/create.component';
import { DeleteComponent } from './components/post/delete/delete.component';
import { EditComponent } from './components/post/edit/edit.component';
import { ListallComponent } from './components/post/listall/listall.component';
import { CreateComponent } from './components/therapist/create/create.component';
import { EditComponent } from './components/therapist/edit/edit.component';
import { ListoneComponent } from './components/therapist/listone/listone.component';
import { ListallComponent } from './components/therapist/listall/listall.component';
import { EditComponent } from './components/user/edit/edit.component';
import { PostComponent } from './components/user/post/post.component';

const routes: Routes = [
  { path: "admin/add", component: AddComponent },

  { path: "admin/delete", component: DeleteComponent },

  { path: "admin/edit", component: EditComponent},

  { path: "admin/view", component: ViewComponent},

  { path: "post/create", component: CreateComponent},

  { path: "post/delete", component: DeleteComponent},

  { path: "post/edit", component: EditComponent},

  { path: "post/listall", component: ListallComponent},

  { path: "therapist/create", component: CreateComponent},

  { path: "therapist/edit", component: EditComponent},

  { path: "therapist/listall", component: ListallComponent},

  { path: "therapist/listone", component: ListoneComponent},

  { path: "user/edit", component: EditComponent},

  { path: "user/post", component: PostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
