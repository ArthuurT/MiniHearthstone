import { Personnage } from "./personnage";
import { Carte } from "./carte";

export interface Joueur extends Personnage {
    etatMain: Array<Carte>;
}
