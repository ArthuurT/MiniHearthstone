import { Component, OnInit, Input } from '@angular/core';
import { Joueur } from '../interfaces/joueur';
import { Adversaire } from '../interfaces/adversaire';
import { CarteServiteur } from '../interfaces/carte-serviteur';
import { CarteSort } from '../interfaces/carte-sort';
import { CarteComponent } from './carte/carte.component';
import { WebsocketService } from '../websocket.service';
import { TimerService } from '../timer.service';


declare var require: any;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent{

  @Input() joueur : Joueur;
  @Input() adversaire : Adversaire;
  public estJoueurCourant : boolean;

  constructor(private webSocketService : WebsocketService, private timer : TimerService) {

    let etatPartie = this.webSocketService.getEtatPartie();
    etatPartie = JSON.stringify(etatPartie);
    etatPartie = JSON.parse(etatPartie);
  
    this.initJoueur(etatPartie);
    this.initAdversaire(etatPartie);
    this.estJoueurCourant = etatPartie.estJoueurCourant;
    this.timer.start();

    let ws = this.webSocketService.getWebSocket();
    ws.subscribe("/user/queue/etatPartie",(frame) => {
      let message = JSON.parse(frame.body);
      this.webSocketService.setEtatPartie(message.etatPartie);
      this.initJoueur(message.etatPartie);
      this.initAdversaire(message.etatPartie);
      console.log("Message reçu : " + message);
    });
    ws.subscribe("/user/queue/nouveauTour",(frame) => {
      let message = JSON.parse(frame.body);
      this.webSocketService.setEtatPartie(message.etatPartie);
      this.initJoueur(message.etatPartie);
      this.initAdversaire(message.etatPartie);
      this.timer.reset();
      this.estJoueurCourant = message.etatPartie.estJoueurCourant;
      console.log("Message reçu : " + message);
    });
    ws.subscribe("/user/queue/finPartie",(frame) => {
      let message = JSON.parse(frame.body);
      let vainqueur = message.pseudo;
      console.log("Message reçu : " + message);
    });
  }

  // Init Joueur

  public initJoueur(data){
    this.joueur = {
      pseudo : data['joueur']['pseudo'],
      heros : data['joueur']['heros']['type'],
      image : "../../../assets/img/" + data['joueur']['heros']['image'],
      pv : data['joueur']['heros']['pointsVie'],
      manaTotal : data['joueur']['mana']['capacite'],
      manaDisponible : data['joueur']['mana']['quantite'],
      armure : data['joueur']['heros']['pointsArmure'],
      coutAttaque : data['joueur']['heros']['actionSpeciale']['cout'],
      cibleAttaque : data['joueur']['heros']['actionSpeciale']['cible'],
      etatBoard : [],
      etatMain : []
    };


    // Init Cartes + Ajout Main + Board

    data['joueur']['main']['serviteurs'].forEach(element => {
      let c = this.initServiteur(element,this.joueur);
      this.joueur.etatMain.push(c);
    });

    data['joueur']['main']['sorts'].forEach(element => {
      let c = this.initSort(element,this.joueur);
      this.joueur.etatMain.push(c);
    });

    let attaqueSpeciale = this.initAttaqueSpeciale(data,this.joueur);
    this.joueur.etatMain.push(attaqueSpeciale);
  
    data['joueur']['board'].forEach(element => {
      let c = this.initServiteur(element,this.joueur);
      this.joueur.etatBoard.push(c);
    });
  }

  initAttaqueSpeciale(data,joueur){
    let c : CarteSort;

    c = {
      joueur : joueur,
      id : -1,
      coutMana : data['joueur']['heros']['actionSpeciale']['cout'],
      description : data['joueur']['heros']['actionSpeciale']['description'],
      imageURL : data['joueur']['heros']['actionSpeciale']['image'],
      nom : "Sort Spécial",
      classe : "SORT SPECIAL",
      cible : data['joueur']['heros']['actionSpeciale']['cible'],
      type : "sort"
    }

    return c;
  }

  // Init Adversaire

  public initAdversaire(data){
    this.adversaire = {
      pseudo : data['adversaire']['pseudo'],
      heros : data['adversaire']['heros']['type'],
      image : "../../../assets/img/" + data['adversaire']['heros']['image'],
      pv : data['adversaire']['heros']['pointsVie'],
      manaTotal : data['adversaire']['mana']['capacite'],
      manaDisponible : data['adversaire']['mana']['quantite'],
      armure : data['adversaire']['heros']['pointsArmure'],
      nbCartesMain : data['adversaire']['nbCartesMain'],
      etatBoard : []
    };

    // Init Cartes + Ajout Board

    data['adversaire']['board'].forEach(element => {
      let c = this.initServiteur(element,this.adversaire);
      this.adversaire.etatBoard.push(c);
    });
  }

  public initServiteur(data,joueur) : CarteServiteur {
    let c : CarteServiteur;

    c = {
      joueur : joueur,
      id : data['identifiant'],
      coutMana : data['cout'],
      description : data['description'],
      imageURL : data['image'],
      pv : data['vie'],
      degats : data['degats'],
      nom : data['nom'],
      provocation : data['effetProvocation'],
      lifesteal : data['effetVolDeVie'],
      charge : data['effetCharge'],
      jouable : data['jouable'],
      leader : data['effetLeader'],
      classe : data['classe'],
      cible : data['cible'],
      type : "serviteur"
    }
    return c;
  }

  public initSort(data,joueur): CarteSort {
    let c : CarteSort;

    c = {
      joueur : joueur,
      id : data['identifiant'],
      coutMana : data['cout'],
      description : data['description'],
      imageURL : data['image'],
      nom : data['nom'],
      classe : data['classe'],
      cible : data['cible'],
      type : "sort"
    }

    return c;
  }



}
