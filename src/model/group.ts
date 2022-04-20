// Généricité
export class Group<T> {
  constructor(private members: T[], private leader: T) {

  }

  isMember(element: T): boolean {
    return this.members.indexOf(element) !== -1;
  }

}

