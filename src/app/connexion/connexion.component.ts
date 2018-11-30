import { Component, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { InputComponent } from './input/input.component';
import { ChampselectComponent } from './champselect/champselect.component';
import { WebsocketService } from '../websocket.service';
import { ConnexionService } from '../connexion.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent{
  @ViewChild(InputComponent) inputDetails:InputComponent;
  @ViewChild(ChampselectComponent) selectDetails:ChampselectComponent;

  constructor(private connexionService: ConnexionService) {
		connexionService.messages.subscribe(msg => {
      let m = JSON.stringify(msg);
      console.log("[connexion] Response from websocket: " + m);
    });
	}

  clickable(){
    return !(this.inputDetails.playerName != "" && this.selectDetails.heros_selected != null);
  }

  sendMsg(){

    let message = {
      playerName: this.inputDetails.playerName,
      herosName: this.selectDetails.herosName
    }

		console.log('new message from client to websocket: ' + message);
		this.connexionService.messages.next(message);
	}
}
