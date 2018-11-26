import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent{
  public imgPlayer = "../../assets/img/heros3_ex.png";
  public choosenName = "Hug";
  public boolLoading = true;

  setLoading(b){
    this.boolLoading = b;
  }

}
