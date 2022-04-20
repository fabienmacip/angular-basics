import { Component } from '@angular/core';
import { Pet } from '../model/pet';
import { Employee2 } from '../model/employee2';
import { Thing } from '../model/thing';


@Component({
  selector: 'sty-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basics';

  constructor() {
    // Classe Pet
    let rex = new Pet('Rex', 'Malinois', 7);

    // Classe Employee2
    let ouvrier = new Employee2('DUPONT','Jean',38, 5000);
    console.log(ouvrier.getSalaire());

    // Tuples
    let person = ['John', 45];
    person[0]; // John
    person[1]; // 45

    let [name, age, size] = ['John', 45, 'L'];

    let figure = {
      width: 20,
      length: 42,
      depth: 21
    }
    // On peut déstructurer cet objet FIGURE
    /* let {width, length, depth} = figure;
    console.log(width); */
    // On peut déstructrer seulement une partie
    let {width, ...rest} = figure;
    console.log(width);
    console.log(rest.depth);
    console.log(rest.length);

    // Combinaison de types
    // Intersection -> Tous les membres de Pet ET de Thing
    let thingAndPet: Pet&Thing;

    // Union -> Tous les membres de Pet ou de Thing
    let thingOrPet: Pet|Thing;
    function doStuffWithPetOrThing(petOrThing: Pet|Thing) {
      if(petOrThing instanceof Pet){
        console.log(petOrThing.name);
      } else {
        console.log(petOrThing.price);
      }
    }

    // Définir notre propre GUARD (instanceof est un guard déjà existant)
    function isPet(instance: Pet|Thing): instance is Pet{
      return (instance as Pet).name !== undefined;
    }

    function doStuffWithPetOrThingBis(petOrThing: Pet|Thing) {
      if(isPet(petOrThing)){
        console.log(petOrThing.name);
      } else {
        console.log(petOrThing.price);
      }
    }

    // ---------

  }
}

/* EXERCICE 1 */
let modele: string;
let marque: string;
let motorisation: number;
let abs: boolean;
let annee: number;

function formateVoiture(modele: string, marque: string, motorisation: number, abs: boolean, annee: number): string {
  let chaine = `${marque} ${modele} ${annee}, motorisation ${motorisation} chevaux`;
  chaine += abs ? ', ABS.' : ', sans ABS';
  return chaine;
}

marque = 'Dacia';
modele = 'Sandero';
motorisation = 70;
abs = true;
annee = 2013;

console.log(formateVoiture(modele,marque,motorisation,abs,annee));

/* EXERCICE 2 */
class Employee {
  constructor (
    private nom: string,
    private prenom: string,
    private age: number
  ) { }

  getSalary(): number {
    return 20000;
  }

}

/* EXERCICE 3 */
let monAdresse = {
  numero: 3,
  voie: 'Rue des charmes',
  cp: 34320,
  ville: 'Neffies'
};
console.log('Code postal : ' + monAdresse[2] + ' - Ville : ' + monAdresse[3]);

let {numero, voie, ...leReste} = monAdresse;

console.log('Numero : ' + numero + ', ' + voie + ' - ' + leReste);










