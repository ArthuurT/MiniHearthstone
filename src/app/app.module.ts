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

@NgModule({
  declarations: [
    AppComponent,
    LoadingPageComponent,
    ConnexionComponent,
    RedirectComponent,
    InputComponent,
    ChampselectComponent
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
