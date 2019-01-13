import { Component, OnInit, ViewChild } from '@angular/core';
import { WebsocketService } from '../websocket.service';
import { Joueur } from '../interfaces/joueur';
import { Adversaire } from '../interfaces/adversaire';
import { ActivatedRoute, Router } from '@angular/router';

declare var require: any;


@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent{
  
  public boolLoading : boolean = false;
  private playerName : string;
  private imgPlayer : string;
  private opponentName : string;
  private imgOpponent : string;
  private ready : boolean = false;

  constructor(private webSocketService : WebsocketService, private router : Router){

    this.playerName = this.webSocketService.name;
    this.imgPlayer = this.webSocketService.image;
    let ws = this.webSocketService.getWebSocket();
    ws.subscribe("/user/queue/abandon",(frame) => {
      this.router.navigateByUrl('/connexion');
    });
    if(!this.webSocketService.ready){
      let ws = this.webSocketService.getWebSocket();
      ws.subscribe("/user/queue/debutPartie",(frame) => {
        let message = JSON.parse(frame.body);
        webSocketService.setEtatPartie(message.etatPartie);
        console.log("Message reçu : " + message);
        this.debutPartie();
      });
    }else{
      this.debutPartie();
    }
  }

  debutPartie(){
    this.setLoading();
    //sleep
    this.router.navigateByUrl('/game');
  }

  setLoading(){
    this.boolLoading = true;
    this.opponentName = this.webSocketService.getOpponentName();
    this.imgOpponent = this.webSocketService.getOpponentPicture();
  }
}
