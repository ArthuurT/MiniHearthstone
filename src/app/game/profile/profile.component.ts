import { Component, OnInit, Host, Input } from '@angular/core';
import { GameComponent } from '../game.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  @Input() joueurProfil : boolean;

  constructor(@Host() public game: GameComponent){
  }

}
