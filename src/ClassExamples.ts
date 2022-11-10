/**
 * método toString é chamado automaticamente
 * ao forçar converter a classe em string
 */
class Person {
  name: string;
  age: number;
  height: number;

  constructor(name: string, age: number, height: number) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  toString(): string {
    return `${this.name} tem ${this.age} anos e ${this.height} mt de altura.`;
  }
}

const person1 = new Person("maria", 20, 1.6);
const person2 = new Person("ronaldo", 40, 1.8);

// console.log("Person " + person1);
// console.log("Person " + person2);

/** métodos */

class Teacher {
  name: string;
  age: number;
  matter: string;

  constructor(name: string, age: number, matter: string) {
    this.name = name;
    this.age = age;
    this.matter = matter;
  }

  hello(): string {
    return `meu nome é ${this.name}, tenho ${this.age} anos e
    leciono a matéria de ${this.matter}`;
  }

  sayNotes(...notes: []): number {
    const total = notes.reduce((acm, note) => acm + note, 0);
    return total / notes.length;
  }
}

const teacher1 = new Teacher("piffer", 60, "turbo pascal");

// console.log(teacher1.hello());
// console.log(teacher1.sayNotes(10, 20, 50, 60));

/**
 * herança
 */
class Regisrtation {
  name: string;
  birth: Date;

  constructor(name: string, birth: Date) {
    this.name = name;
    this.birth = birth;
  }
}

class Client extends Regisrtation {
  email: string;
  company: string;

  constructor(name: string, birth: Date, email: string, company: string) {
    super(name, birth);
    this.email = email;
    this.company = company;
  }
}

const client1 = new Client("Pablo", new Date(), "email@email.com", "hcode");
