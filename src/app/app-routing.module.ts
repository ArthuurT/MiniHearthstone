import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoadingPageComponent} from './loading-page/loading-page.component';
import { AppComponent } from './app.component';
import {ConnexionComponent} from './connexion/connexion.component';


const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'loading', component: LoadingPageComponent },
  { path: '', redirectTo: 'connexion', pathMatch: 'full'},
  { path: 'connexion', component: ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
