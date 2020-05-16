import { Routes } from '@angular/router';
import { HomeComponent } from './router-form/views/home/home.component';
import { AdminComponent } from './router-form/views/admin/admin.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { PersonneFormComponent } from './personne-form/personne-form.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personnes', component:PersonnesComponent},
  { path: 'createPersonne', component:PersonneFormComponent}
];
