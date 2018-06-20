import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  number: number = 0;
  @Output() public changeNumber = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.number++;
    this.changeNumber.emit({
      value:this.number
    });
  }

  remove(){
    this.number--;
    this.changeNumber.emit({
      value:this.number
    });
  }
}
