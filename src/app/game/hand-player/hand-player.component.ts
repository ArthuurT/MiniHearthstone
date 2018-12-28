import { Component, OnInit, Host, Input } from '@angular/core';
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

  public array:Carte[];

  constructor(@Host() public game: GameComponent){
    this.array = game.joueur.etatMain;
  }

  drop(event: CdkDragDrop<string[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  
}
