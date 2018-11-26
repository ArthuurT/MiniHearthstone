import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RedirectComponent } from './redirect/redirect.component';
import { InputComponent } from './connexion/input/input.component';
import { ChampselectComponent } from './connexion/champselect/champselect.component';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { ProfileComponent } from './game/profile/profile.component';
import { InfosGameComponent } from './game/infos-game/infos-game.component';
import { DeckComponent } from './game/deck/deck.component';
import { HandPlayerComponent } from './game/hand-player/hand-player.component';
import { HandOpponentComponent } from './game/hand-opponent/hand-opponent.component';
import { BoardComponent } from './game/board/board.component';
@NgModule({
  declarations: [
    AppComponent,
    LoadingPageComponent,
    ConnexionComponent,
    RedirectComponent,
    InputComponent,
    ChampselectComponent,
    GameComponent,
    ProfileComponent,
    InfosGameComponent,
    DeckComponent,
    HandPlayerComponent,
    HandOpponentComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RedirectComponent]
})
export class AppModule { }
