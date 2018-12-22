import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
