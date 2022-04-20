// Généricité

/*
Nous voulons représenter, dans un programme, le concept de collectionneur.
Un collectionneur accumule un seul type d'objets (timbres, figurines, cartes, etc.).
La classe collectionneur doit :
- Être générique
- Conserver un tableau avec les éléments de la collection
- Posséder une méthode permettant d'ajouter un élément à sa collection
- Posséder une méthode permettant de récupérer le nombre d'éléments dans sa collection
*/

export class Collectionneur<T> {
  constructor(private elements: T[]) {}

  addElement(element: T): void {
    this.elements.push(element);
  }

  cardinalElements(): number {
    return this.elements.length;
  }

}

