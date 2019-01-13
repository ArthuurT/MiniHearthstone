import { Component, OnInit, Host, Input } from '@angular/core';
import { GameComponent } from '../game.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Carte } from 'src/app/interfaces/carte';
import { WebsocketService } from 'src/app/websocket.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  @Input() joueurProfil : boolean;
  fakeArray = new Array(1);
  constructor(@Host() public game: GameComponent, public webSocketService : WebsocketService){
    console.log(game.joueur.image);
    console.log(game.adversaire.image);
  }

  drop(event: CdkDragDrop<any>){
    let carte = event.previousContainer.data[event.previousIndex];

    if(event.previousContainer.id == "board-player"){
      // Envoi serveur (attaque serviteur -> adversaire)
      this.attaquer(carte.id,this.game.adversaire.identifiant);
    }else if(event.previousContainer.id = "hand-player"){
      if(carte.cible == "ADVERSAIRE" && carte.type == "sort"){
        // Envoi serveur (sort ciblé -> adversaire)
        this.poserSort(carte.id,this.game.adversaire.identifiant);
      }else if(carte.cible == "ADVERSAIRE" && carte.type == "serviteur"){
        // Envoi serveur (serviteur ciblé -> adversaire)
        // (A faire)
      }
    }

  }

  attaquer(identifiant,cible){
    let ws = this.webSocketService.getWebSocket();
    ws.send("/app/attaquer",{},JSON.stringify({'idServiteur': identifiant, 'idCible' : cible}));
    console.log("attaque lancé :" + identifiant);
  }

  poserSort(identifiant,cible){
    let ws = this.webSocketService.getWebSocket();
    ws.send("/app/jouerCarteSort",{},JSON.stringify({'idCarte': identifiant, 'idCible' : cible}));
    console.log("sort lancé :" + identifiant);
  }


}
