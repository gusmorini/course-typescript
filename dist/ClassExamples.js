"use strict";
class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    toString() {
        return `${this.name} tem ${this.age} anos e ${this.height} mt de altura.`;
    }
}
const person1 = new Person("maria", 20, 1.6);
const person2 = new Person("ronaldo", 40, 1.8);
class Teacher {
    constructor(name, age, matter) {
        this.name = name;
        this.age = age;
        this.matter = matter;
    }
    hello() {
        return `meu nome é ${this.name}, tenho ${this.age} anos e
    leciono a matéria de ${this.matter}`;
    }
    sayNotes(...notes) {
        const total = notes.reduce((acm, note) => acm + note, 0);
        return total / notes.length;
    }
}
const teacher1 = new Teacher("piffer", 60, "turbo pascal");
class Regisrtation {
    constructor(name, birth) {
        this.name = name;
        this.birth = birth;
    }
}
class Client extends Regisrtation {
    constructor(name, birth, email, company) {
        super(name, birth);
        this.email = email;
        this.company = company;
    }
}
const client1 = new Client("Pablo", new Date(), "email@email.com", "hcode");
//# sourceMappingURL=ClassExamples.js.map