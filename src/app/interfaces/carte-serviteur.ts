import { Carte } from "./carte";

export interface CarteServiteur extends Carte{
    pv : number;
    degats : number;
    provocation ? : boolean;
    jouable ? : boolean;
    leader ? : boolean;
}
