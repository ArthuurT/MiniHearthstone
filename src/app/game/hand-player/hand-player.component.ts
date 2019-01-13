import { Component, OnInit, Host, Input, OnChanges } from '@angular/core';
import {CarteComponent} from '../carte/carte.component';
import {Carte} from '../../interfaces/carte';
import { GameComponent } from '../game.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-hand-player',
  templateUrl: './hand-player.component.html',
  styleUrls: ['./hand-player.component.css'],
})
export class HandPlayerComponent{

  @Input() public array:Carte[];

  drop(event: CdkDragDrop<Carte[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  
}
