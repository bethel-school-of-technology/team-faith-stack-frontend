import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TherapistComponent } from './components/therapist';
import { ListallComponent } from '.therapist.components';
import { ListoneComponent } from './therapist/listone/listone.component';
import { EditComponent } from './therapist/edit/edit.component';
import { CreateComponent } from './therapist/create/create.component';
import { PostComponent } from './user/post/post.component';
import { DeleteComponent } from './post/delete/delete.component';
import { ViewComponent } from './admin/view/view.component';
import { AddComponent } from './admin/add/add.component';

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
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
