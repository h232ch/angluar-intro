import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup } from "@angular/forms";
import {PeopleService} from "../people.service";


// form control
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  constructor(private peopleService : PeopleService) {}

  // Binding
  name = 'tester';
  today = new Date();
  counter = 0;
  myColor = 'purple'
  people = <any[]>[]

  btnInitCounter() {
    this.counter = 0;
  }

  btnConsoleLog = function () {
    console.log('this is test');
  };

  btnChangeColor(test: string) {
    console.log(test);
    this.myColor = 'red'
  }

  btnCounter() {
    this.counter++;
  }

  peopleLocal = [
    {name: 'sean', age: 24},
    {name: 'you', age: 44},
    {name: 'babo', age: 66},
  ];


//   pipe
  cash = 2.2423;
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
    this.counter = 1;
    this.people = this.peopleService.allPeople();
  }

  ngOnDestroy(): void {
    console.log('component has been destroyed')
  }

  ourForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
  });

  sendForm() {
    console.log(this.ourForm.value)
  }


}
