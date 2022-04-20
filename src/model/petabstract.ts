import { Animal } from './animal';

// Cette classe étant abstraite, on ne peut plus l'instancier
export abstract class PetAbstract implements Animal {
  /* private name: string;
  private race: string; */

  constructor(public name: string, public race: string, protected age: number){
    /* this.name = name;
    this.race = race; */
  }


  abstract talk();

}
