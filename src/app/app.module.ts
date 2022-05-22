import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListallComponent } from './Components/listall.therapist/listall.component';
import { ListoneComponent } from './Components/listone.therapist/listone.component';
import { EditComponent } from './Components/edit.therapist/edit.component';
import { CreateComponent } from './Components/create.therapist/create.component';
import { DeleteComponent } from './post/delete/delete.component';
import { ViewComponent } from './admin/view/view.component';
import { AddComponent } from './admin/add/add.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListallComponent,
    ListoneComponent,
    EditComponent,
    CreateComponent,
    PostComponent,
    DeleteComponent,
    ViewComponent,
    AddComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
