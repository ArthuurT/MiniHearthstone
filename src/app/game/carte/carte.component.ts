import { Component, OnInit,Input } from '@angular/core';
import { Carte } from 'src/app/interfaces/carte';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent{

  @Input() carte : Carte;

  descopen = false;
  name = "Gobelin";
  vie = 2;
  mana = 2;
  degats = 3;
  desc = "ceci est une description de test blabla"


  public setDesc(){
    this.descopen = !this.descopen;
    console.log(this.carte.id);
  }

}
