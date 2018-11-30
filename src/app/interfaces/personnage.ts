import { Serviteur } from "./serviteur";

export interface Personnage {
    etatBoard : Array<Serviteur>;
    pseudo : string;
    pv : number;
    mana : number;
    armure : number;
    heros : string;
}
