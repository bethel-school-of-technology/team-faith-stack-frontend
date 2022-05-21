import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TherapistComponent } from './therapist/therapist.component';
import { ListallComponent } from './therapist/listall/listall.component';
import { ListoneComponent } from './therapist/listone/listone.component';
import { EditComponent } from './therapist/edit/edit.component';
import { CreateComponent } from './therapist/create/create.component';
import { PostComponent } from './user/post/post.component';
import { DeleteComponent } from './post/delete/delete.component';
import { ViewComponent } from './admin/view/view.component';
import { AddComponent } from './admin/add/add.component';
import { LoginComponent } from './src/app/login.register/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TherapistComponent,
    ListallComponent,
    ListoneComponent,
    EditComponent,
    CreateComponent,
    PostComponent,
    DeleteComponent,
    ViewComponent,
    AddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
