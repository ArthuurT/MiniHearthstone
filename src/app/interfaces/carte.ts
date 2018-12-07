import { Joueur } from "./joueur";

export interface Carte {
    joueur : Joueur
    id : number;
    coutMana : number;
    description : string;
    imageURL : string;
}
