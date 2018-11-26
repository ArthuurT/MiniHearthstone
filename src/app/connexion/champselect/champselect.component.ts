import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champselect',
  templateUrl: './champselect.component.html',
  styleUrls: ['./champselect.component.css']
})
export class ChampselectComponent{
  public heros_list = [];
  public heros_selected = null;

  constructor(){
    this.heros_list.push(["../../../assets/img/heros1_ex.png",1]);
    this.heros_list.push(["../../../assets/img/heros2_ex.png",2]);
    this.heros_list.push(["../../../assets/img/heros3_ex.png",3]);
  }

  selected(heros){
    if(this.heros_selected != heros){
      this.heros_selected = heros;
    }
  }

  

}