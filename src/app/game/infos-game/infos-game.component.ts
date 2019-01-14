import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/timer.service';
import { WebsocketService } from 'src/app/websocket.service';

@Component({
  selector: 'app-infos-game',
  templateUrl: './infos-game.component.html',
  styleUrls: ['./infos-game.component.css']
})
export class InfosGameComponent{

  constructor(public timer : TimerService, private ws : WebsocketService) { }

  skip(){
    let ws = this.ws.getWebSocket();
    ws.send("/app/terminerTour",{},{});
    console.log("fin du tour");
  }

}
