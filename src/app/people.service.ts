import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  // observable
  newObservable$ = new Observable(observer => {
    observer.next(this.people);
  });

  people = [
    {name: 'sean', age: 24},
    {name: 'you', age: 44},
    {name: 'babo', age: 66},
    {name: 'ddd', age: 666}
  ];
  constructor() {

  }
  allPeople() {
    // we could call external API
    return this.people;
  }
}
