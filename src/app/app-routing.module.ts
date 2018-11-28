import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoadingPageComponent} from './loading-page/loading-page.component';
import { AppComponent } from './app.component';
import {ConnexionComponent} from './connexion/connexion.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [
  { path: 'loading', component: LoadingPageComponent },
  { path: '', redirectTo: 'connexion', pathMatch: 'full'},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'game', component: GameComponent},
  { path: '**', redirectTo: 'connexion'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
