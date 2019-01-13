import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private serverUrl = 'http://78.240.17.152:56552/websocket';
  private stompClient;
  private etatPartie;
  public ready:boolean;
  public name:string;
  public image:string;

  constructor() { this.initializeWebSocketConnection(); }

  initializeWebSocketConnection(){
    this.ready = null;
    this.name = "";
    this.image = "";
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    console.log("Connection établie");
  }

  getWebSocket(){
    if(this.stompClient != null){
      return this.stompClient;
    }else{
      console.log("Websocket introuvable");
    }
  }

  setEtatPartie(etatPartie){
    this.etatPartie = etatPartie;
  }

  getEtatPartie(){
    return this.etatPartie;
  }

  getOpponentName(){
    return this.etatPartie.adversaire.pseudo;
  }

  getOpponentPicture(){
    return this.etatPartie.adversaire.heros.image;
  }

}
