/* Créer une classe Employee.
Un employé a un nom, un prénom, un âge et
une méthode qui permet de retourner son salaire.
Par soucis de simplicité, nous dirons que le salaire
d'un employé est fixé à 20 000. Toutes les propriétés sont privées. */

export class Employee2 {

  constructor(private nom: string, private prenom: string, private age: number, private salaire: number){

  }

  getSalaire(): number {
    return 20000;
  }
}
