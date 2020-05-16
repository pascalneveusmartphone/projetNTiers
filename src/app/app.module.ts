import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { RouterModule } from '@angular/router';
import { PersonneFormComponent } from './personne-form/personne-form.component';
import { RouterFormComponent } from './router-form/router-form.component';
import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    PersonnesComponent,
    PersonneFormComponent,
    RouterFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
