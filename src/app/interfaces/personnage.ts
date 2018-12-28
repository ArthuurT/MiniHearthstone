import { Carte } from './carte';

export interface Personnage {
    etatBoard : Array<Carte>;
    pseudo : string;
    pv : number;
    mana : number;
    armure : number;
    heros : string;
}