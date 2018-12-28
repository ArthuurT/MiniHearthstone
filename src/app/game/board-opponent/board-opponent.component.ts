import { Component, OnInit, Host } from '@angular/core';
import { Carte } from 'src/app/interfaces/carte';
import { GameComponent } from '../game.component';

@Component({
  selector: 'app-board-opponent',
  templateUrl: './board-opponent.component.html',
  styleUrls: ['./board-opponent.component.css']
})
export class BoardOpponentComponent{

  public array:Carte[];

  constructor(@Host() public game: GameComponent){
    this.array = game.adversaire.etatBoard;
  }

}
