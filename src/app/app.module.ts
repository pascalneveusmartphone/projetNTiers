import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { RouterModule } from '@angular/router';
import { PersonneFormComponent } from './personne-form/personne-form.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonnesComponent,
    PersonneFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
