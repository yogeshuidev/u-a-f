import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit, OnChanges {

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

  ngOnChanges(changes) {
    if(changes.detail) {
        this.detail = Object.assign({}, changes.detail.currentValue);
    }
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
