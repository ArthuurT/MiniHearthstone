import { Component, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { InputComponent } from './input/input.component';
import { ChampselectComponent } from './champselect/champselect.component';
import { WebsocketService } from '../websocket.service';  
import {Router} from '@angular/router';
import { getTypeNameForDebugging } from '@angular/common/src/directives/ng_for_of';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent{
  @ViewChild(InputComponent) inputDetails:InputComponent;
  @ViewChild(ChampselectComponent) selectDetails:ChampselectComponent;

  constructor(private webSocketService: WebsocketService, private router : Router) {
    let ws = this.webSocketService.getWebSocket();
    ws.connect({}, function(frame){
      ws.subscribe("/user/queue/attente",(frame) => {
        let message = JSON.parse(frame.body);
        console.log("Message reçu : " + message);
        webSocketService.ready = false;
        router.navigateByUrl('/loading');
      });
      ws.subscribe("/user/queue/debutPartie",(frame) => {
        // A compléter
        let message = JSON.parse(frame.body)
        webSocketService.setEtatPartie(message.etatPartie);
        console.log("Message reçu : " + message);
        webSocketService.ready = true;
        router.navigateByUrl('/loading');
      });
      ws.subscribe("/user/queue/erreur",(message) => {
        // A compléter
        console.log("ERREUR : " + message)
      });
    });
  }

  lancerPartie(){
    let ws = this.webSocketService.getWebSocket();
    let pseudo = this.inputDetails.playerName;
    let heros = this.selectDetails.herosName.toUpperCase();
    this.webSocketService.name = pseudo;
    this.webSocketService.image = this.selectDetails.herosPicture;
    console.log("lancer partie : " + pseudo + " / " + heros);
    ws.send("/app/nouvellePartie",{},JSON.stringify({'pseudo': pseudo , 'heros': heros}))
  }

  clickable(){
    return !(this.inputDetails.playerName != "" && this.selectDetails.heros_selected != null);
  }
}
