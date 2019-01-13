import { Component, OnInit, Host, Input, OnChanges } from '@angular/core';
import { GameComponent } from '../game.component';

@Component({
  selector: 'app-hand-opponent',
  templateUrl: './hand-opponent.component.html',
  styleUrls: ['./hand-opponent.component.css']
})
export class HandOpponentComponent implements OnChanges{

  @Input() public nbCartesMain;
  public fakeArray;

  constructor(){
    this.fakeArray = new Array(this.nbCartesMain); 
  }

  ngOnChanges(){
    this.fakeArray = new Array(this.nbCartesMain);
  }

}
