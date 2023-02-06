
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
 public API_URL: string = 'https://rickandmortyapi.com/api/character?page=1';
  constructor( private http: HttpClient) { }

  getCharacters () {
    return this.http.get(this.API_URL);
  }
}
