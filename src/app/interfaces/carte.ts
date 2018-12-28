import { Joueur } from "./joueur";

export interface Carte {
    joueur : Joueur;
    id : number;
    nom : string;
    coutMana : number;
    description : string;
    imageURL : string;
}
