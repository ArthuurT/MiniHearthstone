import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { WebsocketService } from '../websocket.service';
import { Joueur } from '../interfaces/joueur';
import { Adversaire } from '../interfaces/adversaire';

declare var require: any;


@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent{
  public boolLoading = true;

  private playerName : string;
  private imgPlayer : string;

  private opponentName : string;
  private imgOpponent : string;


  //private player : Joueur;
  //private opponent : Adversaire;

  constructor(private connexionService: ConnexionService) {
		connexionService.messages.subscribe(msg => {
      let jsonTest = require('../../assets/gameState.json');
      console.log(jsonTest);
      let m = JSON.stringify(jsonTest);
      m = JSON.parse(m);

      if(m['adversaire']['pseudo'] == ""){
        this.setPlayer(m);
      }else{
        this.setLoading(false,m);
      }

    });
  }
  
  setLoading(b,m){
    this.boolLoading = b;
    this.setPlayer(m)
    this.setOpponent(m);
  }

  setPlayer(m){
    this.playerName = m['joueur']['pseudo'];
    this.imgPlayer = "../../assets/img/" + m['joueur']['heros']['image'];
  }

  setOpponent(m){
    this.opponentName = m['adversaire']['pseudo'];
    this.imgOpponent = "../../assets/img/" + m['adversaire']['heros']['image'];
  }

}
