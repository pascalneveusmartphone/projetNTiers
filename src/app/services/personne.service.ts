import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Personne } from '../model/personne';
import { environment } from 'src/environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8; Accept-Enconding',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PersonneService {

  // contextPath = 'rest/todos';
  
  constructor(private http: HttpClient) {
    console.log("Construction");
   }

  getValidation(): Observable<Personne[]> {
    return this.http.get<Personne[]>(environment.apiUrl + '/getAllPerson')
      .pipe(
        tap(taches => console.log('fetched valiation')),
        catchError(this.handleError)
      );
  }

  getPersonnes() {        
    return this.http
                .get<Array<Personne>>(environment.apiUrl + '/getAllPerson')
                .pipe(
                  catchError(this.handleError)
                );
  }

  getPersonneById(id: number) {        
    return this.http
                .get<Personne>(environment.apiUrl + '/getPersonById' + '/' + id )
                .pipe(
                  catchError(this.handleError)
                )
  }

  creerPersonne(personne: Personne){
    console.log(JSON.stringify(personne));
    return this.http
                .post<Personne>(environment.apiUrl + '/insertPerson',
                JSON.stringify(personne),httpOptions )
                .pipe(
                  catchError(this.handleError)
                );
  }

  private handleError(error: HttpErrorResponse) {
    // message:String;
    // alert("Erreur");
    console.error(error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly. 
      alert("Erreur : "+ /*console.error(*/"An error occurred:" + /*,*/ error.error.message); //);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      alert("Erreur : " +
        "Backend returned code " + error.status +
        "body was: " + error.error);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
