import { Animal } from './animal';

export class Pet implements Animal {
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
