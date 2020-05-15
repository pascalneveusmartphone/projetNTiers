import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { PersonneService } from '../services/personne.service';
import { error } from 'protractor';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ns-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {

  personnes: Array<Personne> = [];
  currentPersonne: Personne = new Personne();

  constructor(private personnesService:PersonneService) { }

  ngOnInit(): void {
    console.log('In ngOnInit');
    this.personnesService.getPersonnes().subscribe(
      (data: Array<Personne>) => {
        this.personnes = data;
        // console.log(this.contacts);
      },
      (error: HttpErrorResponse) => {
        console.error(error.statusText + ' - ' +error.message);
      },
      () => {
        console.log('Done.');
      }
    );
  }

}
