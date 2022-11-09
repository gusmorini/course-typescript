/*
 * class
 */
class Product {
  name: string;
  value: number;

  constructor(productName: string, productValue: number) {
    this.name = productName;
    this.value = productValue;
  }
}

const ps5 = new Product("Playstation 5", 4000);
const xbox = new Product("Xbox series X", 4000);

/*
 * union types
 */
let keyPix: string | number = "teste@teste.com";

/*
 * boolean
 */
let admin: boolean = true;

/*
 * array
 */
const category: (string | number)[] = ["comics", "horror", "comedy"];
const moviesYears: Array<number | string> = [];
for (let year = 1980; year <= new Date().getFullYear(); year++) {
  moviesYears.push(year);
}

/*
 * tuple
 */
let superset: [string, number, string] = ["typescript", 2011, "anders"];

let daysWeek: [string, string, string, string, string, string, string] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/*
 * objects
 */
const configServer: object = {
  server: "Firestore",
  ip: "127:0.0.0.1",
  password: "123456",
};

/**
 * enum
 */
enum Permission {
  ADMIN,
  USER,
  READONLY,
}

/**
 * null | undefined
 * null valor inválido
 * undefined valor não definido
 */
// const element: HTMLHeadingElement | null = document.querySelector("div");
let db: string | null = "mysql, 127.0.0.1, password";
db = null;
let myVariable: undefined | string = undefined;
myVariable = "text in variable accepter";

/**
 * any
 * usado para definir uma variavel para todos os tipos
 * deve ser usado com cautela em casos específicos do
 * código
 */
let value: any;

/**
 * unknown
 * usado quando n se sabe
 * o tipo de dados que vai conter a variável
 * ex. retorno de uma api
 */
let result: unknown;
result = {
  success: true,
};
result = "yes very nice bro";
result = 200;

/**
 * void
 * cirado para especificar
 * retorno de funções | métodos
 * que não retorna valor
 */
const myConsole: void = console.log("Hello my friends");
function consoleDate(): void {
  console.log(Date.now());
}

/**
 * never
 * tipo de dados que nunca vai ter um retorno
 */
function showError(message: string): never {
  throw new Error(message);
}
let n: number = 0;
function loopInfinite(): never {
  while (true) {
    console.log(n++);
  }
}
