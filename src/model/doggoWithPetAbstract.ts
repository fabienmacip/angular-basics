import { Pet } from './pet';

export class DoggoWithPetAbstract extends Pet {

  getAge(): number {
    return this.age;
  }

  talk() {
    console.log("Wouf wouf");
  }
}
