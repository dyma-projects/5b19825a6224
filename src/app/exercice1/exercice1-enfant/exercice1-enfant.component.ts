import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Exercice1Component } from './exercice1.component';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() number: number = 0;
  @Output('change') public changeNumber:EventEmitter<number> =  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.number++;
    this.changeNumber.emit({
      value:this.number;
    });
  }

  remove(){
    this.number--;
    this.changeNumber.emit({
      value:this.number;
    });
  }
}
