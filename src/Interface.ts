/**
 * interface define regras
 * e obriga a segui-las
 */

interface IAddress {
  street: string;
  number: number;
  city: string;
}

const myAddress: IAddress = {
  street: "rua progresso",
  number: 901,
  city: "maria helena",
};

const myBrotherAddress: IAddress = {
  street: "rua piedade",
  number: 1791,
  city: "maria helena",
};

/**
 * product
 * validity item opcional
 */

interface IProduct {
  name: string;
  price: number;
  description: string;
  validity?: Date;
}

const prod1: IProduct = {
  name: "playstation 5",
  price: 4000,
  description: "console ps5",
};

const prod2: IProduct = {
  name: "coca-cola 2L",
  price: 8.0,
  description: "refrigerante de cola",
  validity: new Date("2022-12-12"),
};

/**
 * read-only
 * não permite sobrescrever atributos
 * dentro da interface ex:
 * curse1.title = 'novo valor'
 */

interface ICurse {
  readonly title: string;
  description?: string;
  readonly price: number;
  workload: number;
  classification: number;
}

const curse1: ICurse = {
  title: "typescript",
  price: 27.9,
  workload: 10,
  classification: 5,
};

/**
 * interface function
 * define como uma função
 * deve se comportar
 */

interface ISumNumbers {
  (num1: number, num2: number): number;
}
// ex. 1
const sum1: ISumNumbers = (num1: number, num2: number): number => {
  return num1 + num2;
};
// ex. 2
const sum2: ISumNumbers = (num1, num2) => {
  return num1 + num2;
};

/**
 * interface métodos
 * define como os métodos devem se corportar
 */

interface ICalc {
  sum(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiplies(a: number, b: number): number;
  divided(a: number, b: number): number;
}

const multipliesNumbers = (a: number, b: number): number => a * b;
const dividedNumbers = (a: number, b: number): number => a / b;

const calc: ICalc = {
  sum: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiplies: multipliesNumbers,
  divided: dividedNumbers,
};

/**
 * interface recursiva
 */
interface ICategory {
  id: number;
  name: string;
  belongs?: ICategory;
}

interface IMenu {
  categories: ICategory[];
}

const frontEnd: ICategory = {
  id: 1,
  name: "Front-End",
};

const backEnd: ICategory = {
  id: 2,
  name: "Back-End",
};

const css: ICategory = {
  id: 3,
  name: "CSS",
  belongs: frontEnd,
};

const php: ICategory = {
  id: 4,
  name: "PHP",
  belongs: backEnd,
};

const menu: IMenu = {
  categories: [frontEnd, backEnd, css, php],
};

/** interface array */
interface ITodo {
  [index: number]: string | number | boolean | ICategory;
}

const myTodos: ITodo = ["javascript", "typescript", "php", 2000, true, backEnd];

/**
 * interface extends
 */

interface IModel {
  id: number;
  created_at: number;
  updated_at: number;
}

interface IPeople extends IModel {
  name: string;
  age?: number;
}

interface IUser extends IPeople {
  email: string;
  password: string;
}

const jorge: IUser = {
  id: 1,
  created_at: new Date().getTime(),
  updated_at: new Date().getTime(),
  name: "jorge da silva",
  age: 50,
  email: "jorge@teste",
  password: "123456",
};
