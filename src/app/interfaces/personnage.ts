import { Carte } from './carte';

export interface Personnage {
    etatBoard : Array<Carte>;
    pseudo : string;
    pv : number;
    manaTotal : number;
    manaDisponible : number;
    armure : number;
    heros : string;
    image : string;
    identifiant : number;
}