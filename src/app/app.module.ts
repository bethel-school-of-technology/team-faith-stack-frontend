import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TherapistComponent } from './therapist/therapist.component';
import { ListallComponent } from './therapist/listall/listall.component';
import { ListoneComponent } from './therapist/listone/listone.component';
import { EditComponent } from './therapist/edit/edit.component';
import { CreateComponent } from './therapist/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    TherapistComponent,
    ListallComponent,
    ListoneComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
