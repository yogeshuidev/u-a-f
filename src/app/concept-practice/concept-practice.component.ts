import { Component, OnInit } from '@angular/core';

interface Child {
  name: string,
  age:number
}
interface Passenger {
  id : number,
  fullname: string,
  checkedIn : boolean,
  checkInDate : number | null,
  children: Child[] | null
}
@Component({
  selector: 'app-concept-practice',
  templateUrl: './concept-practice.component.html',
  styleUrls: ['./concept-practice.component.scss']
})
export class ConceptPracticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'U-A-F';

  //interpolation
  hours : number = 160;
  pay : number = 35;
  credited :boolean = true;

  //property binding
  image : string ='assets/logo.svg'

  //event binding
  name : string ="Yogesh";
  changeName() {
    this.name = 'Yogi';
  }
  handleInput(event :any) {
    this.name = event.target.value;
  }

  //local reference
  getValue : string;
  getName(value) {
    this.getValue = value;
    console.log(value); 
 }

 //*ngFor
 passengers: Passenger[] = [{
  id: 1,
  fullname: 'Stephen',
  checkedIn: true,
  checkInDate: 1490742000000,
  children: null
}, {
  id: 2,
  fullname: 'Rose',
  checkedIn: false,
  checkInDate: null,
  children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
}, {
  id: 3,
  fullname: 'James',
  checkedIn: true,
  checkInDate: 1491606000000,
  children: null
}, {
  id: 4,
  fullname: 'Louise',
  checkedIn: true,
  checkInDate: 1488412800000,
  children: [{ name: 'Jessica', age: 1 }]
}, {
  id: 5,
  fullname: 'Tina',
  checkedIn: false,
  checkInDate: null,
  children: null
}];
}
