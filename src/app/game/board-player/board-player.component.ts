import { Component, OnInit, Host, Input } from '@angular/core';
import { Carte } from 'src/app/interfaces/carte';
import { GameComponent } from '../game.component';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Joueur } from 'src/app/interfaces/joueur';
import { WebsocketService } from 'src/app/websocket.service';


@Component({
  selector: 'app-board-player',
  templateUrl: './board-player.component.html',
  styleUrls: ['./board-player.component.css']
})
export class BoardPlayerComponent{

  @Input() public array:Carte[];

  constructor(@Host() public game: GameComponent, private webSocketService : WebsocketService){}

  drop(event: CdkDragDrop<any>){
    let carte = event.previousContainer.data[event.previousIndex];
    
    if(!(event.previousContainer === event.container) && 
          this.game.estJoueurCourant &&
          this.manaSuffisant(carte) && 
          this.estPosable(carte) &&
          event.isPointerOverContainer){

          console.log(carte);
          if(carte.type == "serviteur"){
            this.poserServiteur(carte.id);
          }else if(carte.type == "sort"){
            this.poserSort(carte.id,null);
          }
    }
  }

  manaSuffisant(carte:Carte){
    return carte.joueur.manaDisponible - carte.coutMana >= 0;
  }

  estPosable(carte:Carte){
    return (carte.type == "serviteur" || (carte.type == "sort" && carte.cible == "AUCUNE"));
  }

  poserServiteur(identifiant){
    let ws = this.webSocketService.getWebSocket();
    ws.send("/app/jouerCarteServiteur",{},JSON.stringify({'idCarte': identifiant}));
    console.log("serviteur posé :" + identifiant);
  }

  poserSort(identifiant,cible){
    let ws = this.webSocketService.getWebSocket();
    ws.send("/app/jouerCarteSort",{},JSON.stringify({'idCarte': identifiant, 'idCible' : cible}));
    console.log("sort lancé :" + identifiant);
  }

}
