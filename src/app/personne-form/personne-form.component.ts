import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { PersonneService } from '../services/personne.service';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ns-personne-form',
  templateUrl: './personne-form.component.html',
  styleUrls: ['./personne-form.component.css']
})
export class PersonneFormComponent implements OnInit {

  personne: Personne = new Personne();

  submitted = false;

  constructor(private personnesService:PersonneService) {
  }

  ngOnInit(): void {
  }

  onSubmit() { 
    this.submitted = true; 
    this.personnesService.creerPersonne(this.personne).subscribe(
      (data: Personne) => {
        this.personne = data;
        console.log(JSON.stringify(this.personne));
      },
      (error: HttpErrorResponse) => {
        console.error(error.statusText + ' - ' + error.message);
      },
      () => {
        console.log('Done: Create Personne.');
      });
      alert("Appel de création de personne");
  }

  newPersonne() {
    this.personne = new Personne();
  }

  isValid(valeur:any){
    return valeur;
  }

  afficherInfosPP() {
    return this.personne.typePerson == 'P';
  }

  afficherInfosPM() {
    return this.personne.typePerson == 'M';
  }

  isSaisieOK() {
    return this.isValid(this.personne.typePerson) &&
    this.isValid(this.personne.nomPersonne) &&
    this.isValid(this.personne.adress1) &&
    this.isValid(this.personne.cp) &&
    this.isValid(this.personne.ville) &&
    this.isValid(this.personne.portable) &&
    this.isValid(this.personne.mail) && 
    ( ( this.afficherInfosPP() &&
        this.isValid(this.personne.sex) &&
        this.isValid(this.personne.dateNaiss) &&
        this.isValid(this.personne.lieuNaiss) ) ||
        ( this.afficherInfosPM() &&
        this.isValid(this.personne.siren) ));
  }

  isSaisieTypePersonneOK() {
    return this.personne.typePerson == 'P' || this.personne.typePerson == 'M';
  }


  // TODO: Remove this when we're done
   get diagnostic() { return JSON.stringify(this.personne); }
}
