import { Carte } from "./carte";

export interface CarteServiteur extends Carte{
    provocation  : boolean;
    jouable : boolean;
    leader  : boolean;
    lifesteal : boolean;
    charge : boolean;
}
