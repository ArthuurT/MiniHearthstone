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

  constructor(){
    this.heros_list.push(["../../../assets/img/Mage.png",1,'Mage']);
    this.heros_list.push(["../../../assets/img/Paladin.png",2,'Paladin']);
    this.heros_list.push(["../../../assets/img/Guerrier.png",3,'Mage']);
  }

  selected(heros){
    if(this.heros_selected != heros){
      this.heros_selected = heros;
    }
    this.herosName = this.heros_selected[2];
  }
}