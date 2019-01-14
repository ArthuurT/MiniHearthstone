import { Injectable } from '@angular/core';
import { of, Observable, observable } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { resetComponentState } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private _minutes : number = 1;
  private _secondes : number = 30;
  private _totalSecondes : number = 90;
  private _timer;

  constructor(public ws : WebsocketService){}

  get minutes(): number { return this._minutes; }
  get secondes(): number { return this._secondes; }

  start(){
    this._timer = setInterval(() => {
      if(this._totalSecondes > 0){
        this._totalSecondes--;
        this._minutes = Math.floor(this._totalSecondes / 60);
        this._secondes = this._totalSecondes - this._minutes * 60;
      }else{
        this.ws.getWebSocket().send("/app/terminerTour",{},{});
        clearInterval(this._timer);
      }
    },1000);
  }

  reset(){
    clearInterval(this._timer);
    this._totalSecondes = 90;
    this._secondes = 30;
    this._minutes = 1;
    this.start();
  }

  stop(){
    clearInterval(this._timer);
  }

}
