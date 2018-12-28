import { Component, OnInit, Input } from '@angular/core';
import { Joueur } from '../interfaces/joueur';
import { Adversaire } from '../interfaces/adversaire';
import { ConnexionService } from '../connexion.service';
import { CarteServiteur } from '../interfaces/carte-serviteur';
import { CarteSort } from '../interfaces/carte-sort';


declare var require: any;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent{

  @Input() joueur : Joueur;
  @Input() adversaire : Adversaire;

  constructor(private connexionService: ConnexionService) {

      let jsonTest = require('../../assets/gameState.json');
      jsonTest = JSON.stringify(jsonTest);
      jsonTest = JSON.parse(jsonTest);
      
      this.initJoueur(jsonTest);
      this.initAdversaire(jsonTest);

		connexionService.messages.subscribe(msg => { });
  }

  // Init Joueur

  public initJoueur(data){
    this.joueur = {
      pseudo : data['joueur']['pseudo'],
      heros : data['joueur']['heros']['type'],
      pv : data['joueur']['heros']['pointsVie'],
      mana : data['joueur']['heros']['pointsMana'],
      armure : data['joueur']['heros']['pointsArmure'],
      etatBoard : [],
      etatMain : []
    };

    // Init Cartes + Ajout Main + Board

    data['joueur']['etatMain']['serviteurs'].forEach(element => {
      let c = this.initServiteur(element,this.joueur);
      this.joueur.etatMain.push(c);
    });

    data['joueur']['etatMain']['sorts'].forEach(element => {
      let c = this.initSort(element,this.joueur);
      this.joueur.etatMain.push(c);
    });

    data['joueur']['etatBoard'].forEach(element => {
      let c = this.initServiteur(element,this.joueur);
      this.joueur.etatBoard.push(c);
    });
  }

  // Init Adversaire

  public initAdversaire(data){
    this.adversaire = {
      pseudo : data['adversaire']['pseudo'],
      heros : data['adversaire']['heros']['type'],
      pv : data['adversaire']['heros']['pointsVie'],
      mana : data['adversaire']['heros']['pointsMana'],
      armure : data['adversaire']['heros']['pointsArmure'],
      nbCartesMain : data['adversaire']['nbCartesMain'],
      etatBoard : []
    };

    // Init Cartes + Ajout Board

    data['adversaire']['etatBoard'].forEach(element => {
      let c = this.initServiteur(element,this.adversaire);
      this.adversaire.etatBoard.push(c);
    });
  }

  public initServiteur(data,joueur) : CarteServiteur {
    let c : CarteServiteur;

    c = {
      joueur : joueur,
      id : data['idCarte'],
      coutMana : data['mana'],
      description : data['description'],
      imageURL : data['image'],
      pv : data['vie'],
      degats : data['dégats'],
      nom : data['nom']
    }

    return c;
  }

  public initSort(data,joueur): CarteSort {
    let c : CarteSort;

    c = {
      joueur : joueur,
      id : data['idCarte'],
      coutMana : data['mana'],
      description : data['description'],
      imageURL : data['image'],
      cibleRequise : data['cible'],
      nom : data['nom']
    }

    return c;
  }



}
