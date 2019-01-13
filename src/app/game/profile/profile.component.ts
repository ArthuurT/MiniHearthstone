import { Component, OnInit, Host, Input } from '@angular/core';
import { GameComponent } from '../game.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Carte } from 'src/app/interfaces/carte';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  @Input() joueurProfil : boolean;
  fakeArray = new Array(1);
  constructor(@Host() public game: GameComponent){
    console.log(game.joueur.image);
    console.log(game.adversaire.image);
  }

  drop(event: CdkDragDrop<any>){
    let carte = event.previousContainer.data[event.previousIndex];

    if(event.previousContainer.id == "board-player"){
      // Envoi serveur (attaque serviteur -> adversaire)
      // (A faire)
    }else if(event.previousContainer.id = "hand-player"){
      if(carte.cible == "ADVERSAIRE" && carte.type == "sort"){
        // Envoi serveur (sort ciblé -> adversaire)
        // (A faire)
      }else if(carte.cible == "ADVERSAIRE" && carte.type == "serviteur"){
        // Envoi serveur (serviteur ciblé -> adversaire)
        // (A faire)
      }
    }

  }


}
