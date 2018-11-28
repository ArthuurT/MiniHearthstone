import { Component, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { InputComponent } from './input/input.component';
import { ChampselectComponent } from './champselect/champselect.component';
import { WebsocketService } from '../websocket.service';
import { ConnexionService } from '../connexion.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  providers: [WebsocketService, ConnexionService]
})
export class ConnexionComponent{
  @ViewChild(InputComponent) inputDetails:InputComponent;
  @ViewChild(ChampselectComponent) selectDetails:ChampselectComponent;

  private msg;

  constructor(private connexionService: ConnexionService) {
		connexionService.messages.subscribe(msg => {			
      console.log("Response from websocket: " + msg);
    });
    this.msg = ''
	}

  clickable(){
    return !(this.inputDetails.playerName != "" && this.selectDetails.heros_selected != null);
  }

  sendMsg(){

    this.msg = {
      playerName: this.inputDetails.playerName,
      herosName: this.selectDetails.herosName
    }

		console.log('new message from client to websocket: ', this.msg);
		this.connexionService.messages.next(this.msg);
		this.msg.message = '';
	}



}
