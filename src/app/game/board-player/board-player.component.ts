import { Component, OnInit, Host } from '@angular/core';
import { Carte } from 'src/app/interfaces/carte';
import { GameComponent } from '../game.component';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Joueur } from 'src/app/interfaces/joueur';


@Component({
  selector: 'app-board-player',
  templateUrl: './board-player.component.html',
  styleUrls: ['./board-player.component.css']
})
export class BoardPlayerComponent{

  public array:Carte[];

  constructor(@Host() public game: GameComponent){
    this.array = game.joueur.etatBoard;
  }

  drop(event: CdkDragDrop<Carte[]>){

    let carte = event.previousContainer.data[event.previousIndex];

    if(!(event.previousContainer === event.container) && this.manaSuffisant(carte)){
      this.array.push(carte);
      event.previousContainer.data.splice(event.previousContainer.data.indexOf(carte),1);
      this.appliquerMana(carte);
    }
  }

  appliquerMana(carte:Carte){
    carte.joueur.mana -= carte.coutMana;
  }

  manaSuffisant(carte:Carte){
    return carte.joueur.mana - carte.coutMana >= 0;
  }
}
