import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champselect',
  templateUrl: './champselect.component.html',
  styleUrls: ['./champselect.component.css']
})
export class ChampselectComponent{
  public heros_list = [];
  public heros_selected = null;
  public herosName;
  public herosPicture;

  constructor(){
    this.heros_list.push(["../../../assets/img/mage.png","hero1",'Mage',"Le Mage : Son action spéciale est la Boule de feu, infligeant un point de dégat à l'adversaire"]);
    this.heros_list.push(["../../../assets/img/paladin.png","hero2",'Paladin',"Le Paladin : Son action spéciale est le Renfort, en invoquant un serviteur"]);
    this.heros_list.push(["../../../assets/img/guerrier.png","hero3",'Guerrier',"Le Guerrier : Son action spéciale est l'armure, lui conférant 2 points d'armure "]);
  }

  selected(heros){
    if(this.heros_selected != heros){
      this.heros_selected = heros;
    }
    this.herosName = this.heros_selected[2];
    this.herosPicture = this.heros_selected[0];
  }
}