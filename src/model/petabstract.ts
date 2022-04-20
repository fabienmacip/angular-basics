import { Animal } from './animal';

// Cette classe étant abstraite, on ne peut plus l'instancier
export abstract class Petabstract implements Animal {
  /* private name: string;
  private race: string; */

  constructor(public name: string, public race: string, protected age: number){
    /* this.name = name;
    this.race = race; */
  }


  talk() {
    console.log("coucou");
  }

}
