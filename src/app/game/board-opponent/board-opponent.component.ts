import { Component, OnInit, Host, Input } from '@angular/core';
import { Carte } from 'src/app/interfaces/carte';
import { GameComponent } from '../game.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { isUndefined } from 'util';
import { WebsocketService } from 'src/app/websocket.service';

@Component({
  selector: 'app-board-opponent',
  templateUrl: './board-opponent.component.html',
  styleUrls: ['./board-opponent.component.css']
})
export class BoardOpponentComponent{

  @Input() public array:Carte[];
  public cible:number;

  constructor(@Host() public game: GameComponent, public webSocketService : WebsocketService){}

  drop(event: CdkDragDrop<any[]>){
    let carte = event.previousContainer.data[event.previousIndex];
    let carteCible = event.container.data[this.cible];
    if(event.isPointerOverContainer && this.game.estJoueurCourant){
      if(carte.type == "sort" && (carte.cible == "UN_ADVERSAIRE" || carte.cible == "UN_SERVITEUR_ADVERSE")){
        // Envoi message au serveur (Sort joué)
        if(carte.id != -1){
          this.poserSort(carte.id,carteCible.id);
        }else{
          this.lancerAction(carteCible.id);
          //event.previousContainer.data.splice(event.previousContainer.data.indexOf(carte),1);
        }
      }else if(carte.type == "serviteur"){
        if(carte.jouable && event.previousContainer.id == "board-player"){
          // Envoi message au serveur (Serviteur attaqué)
            this.attaquer(carte.id,carteCible.id);
        }
      }
    }
  }

  carteCible(index){
    if(this.cible != index) this.cible = index;
  }

  poserSort(identifiant,cible){
    let ws = this.webSocketService.getWebSocket();
    ws.send("/app/jouerCarteSort",{},JSON.stringify({'idCarte': identifiant, 'idCible' : cible}));
    console.log("sort lancé :" + identifiant);
  }

  attaquer(identifiant,cible){
    let ws = this.webSocketService.getWebSocket();
    ws.send("/app/attaquer",{},JSON.stringify({'idServiteur': identifiant, 'idCible' : cible}));
    console.log("attaque lancé :" + identifiant);
  }

  lancerAction(cible){
    let ws = this.webSocketService.getWebSocket();
    ws.send("/app/lancerActionSpeciale",{},JSON.stringify({'idCible' : cible}));
    console.log("action spéciale lancée :" + cible);
  }

}
