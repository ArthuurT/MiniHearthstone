import { Component, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { InputComponent } from './input/input.component';
import { ChampselectComponent } from './champselect/champselect.component';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent{
  @ViewChild(InputComponent) inputDetails:InputComponent;
  @ViewChild(ChampselectComponent) selectDetails:ChampselectComponent;

  clickable(){
    return !(this.inputDetails.playerName != "" && this.selectDetails.heros_selected != null);
  }

}
