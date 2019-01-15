import { Component, OnInit,Input } from '@angular/core';
import { Carte } from 'src/app/interfaces/carte';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent{

  @Input() carte;
  @Input() playable : boolean;


  descopen = false;



  public setDesc(){
    this.descopen = !this.descopen;
    console.log(this.carte.jouable)
  }

}
