import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit {

  editing :boolean = false;

  @Input()
  detail : Passenger;
  
  @Output()
  edit : EventEmitter<any> = new EventEmitter();

  @Output()
  remove : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onNameChange(value:string) {
    this.detail.fullname = value;
  }
  
  toggleEdit() {
    if(this.editing) {
      this.edit.emit(this.detail)
    }
    this.editing = !this.editing;
  }

  onRemove(){
    this.remove.emit(this.detail);
  }
}
