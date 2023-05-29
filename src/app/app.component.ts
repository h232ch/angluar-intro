import {Component, OnDestroy, OnInit} from '@angular/core';
import { PeopleService } from "./people.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1> Welcome to new angular world </h1>`,
  styleUrls: ['./app.component.css']
})

// lifecycle OnInit
export class AppComponent implements OnInit, OnDestroy{
  name = 'Sean';
  // today = new Date();
  number = 0;
  counter = 0;
  mycolor = 'purple';

  // Change this property to Service (people service)
  // We need to know what type of return is to specify the type of the property
  // Reason we should use service is that we can use share the service between components existed in a project


  // people = [
  //   {name: 'sean', age: 24},
  //   {name: 'you', age: 44},
  //   {name: 'babo', age: 66},
  // ];
  people = <any[]>[]
  constructor(private peopleService : PeopleService) {}

  // lifecycle
  ngOnInit(): void {
    // observables
    this.peopleService.newObservable$.subscribe(
      data => {
        console.log('obs data here : ', data)
      }, error => {
        console.log('error')
      }
    )
    console.log('component initiated');
    this.counter = 2;
    this.people = this.peopleService.allPeople();
  }

  ngOnDestroy(): void {
    console.log('component has been destroyed')
  }

  btnClicked() {
    console.log(this.number, ' button has been clicked.');
    this.number++;
    this.mycolor = "blue"
  }

  btnInit() {
    this.number = 0;
  }

  btnTest = function () {
    console.log('this is test');
  };

  btnNew(test: string) {
    console.log(test);
    this.counter++;
    this.mycolor = 'red'
  }


//   pipe
  today = new Date();
  cash = 2.2423;

}
