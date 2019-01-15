import { Injectable } from '@angular/core';
import { of, Observable, observable } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { resetComponentState } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private _minutes : number = 2;
  private _secondes : number = 0;
  private _totalSecondes : number = 120;
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
    this._totalSecondes = 120;
    this._secondes = 0;
    this._minutes = 2;
    this.start();
  }

  stop(){
    clearInterval(this._timer);
  }

}
