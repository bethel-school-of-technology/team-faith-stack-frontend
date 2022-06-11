import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule } from "@auth0/angular-jwt";

import { RouterModule } from '@angular/router';
import { PostEditComponent } from './Components/post/edit/edit.component';
import { PostListallComponent } from './Components/post/listall/listall.component';
import { TherapistListallComponent } from './Components/therapist/listall/listall.component';
import { UserEditComponent } from './Components/user/edit/edit.component';
import { UserPostComponent } from './Components/user/post/post.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { WelcomeComponent } from './Component/welcome/welcome.component';
import { AboutComponent } from './Component/about/about.component';
import { UsersService } from './services/users.service';

export function tokenGetter() { 
  return localStorage.getItem("jwt"); 
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PostListallComponent,
    UserPostComponent,
    PostEditComponent,
    TherapistListallComponent,
    UserEditComponent,
    WelcomeComponent,
    AboutComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7102"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
