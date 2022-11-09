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

/**
 * type assertions
 * força afirmação de tipos
 * força a aceitar o tipo da variável
 */
const fruit: unknown = "banana";
const fruits: string[] = [];
/** opção 1 - mais recomendado */
fruits.push(fruit as string);
/** opção 2 - opção que n funciona no jsx */
fruits.push(<string>fruit);

/**
 * functions
 * pode ser tipado os parametros
 * e o retorno da função
 */
function viewMessage(message: string | number): boolean {
  console.log(message);
  return true;
}

const sumNumbers = (num1: number, num2: number): number => {
  return num1 + num2;
};

/**
 * function default
 * subjet está definido com valor padrão
 * sender está definido como opcional
 */
const sendEmail = (
  from: string,
  subject: string = "no subject",
  sender?: string
): void => {
  console.log(`from: ${from} - subject: ${subject} - sender: ${sender}`);
};

/**
 * rest parameters
 * possivel passar parametros variados
 * independente da quantidade de parametros
 * vai ser realizado a operação
 */
const totalIncome = (...income: number[]): number => {
  return income.reduce((acm, item) => acm + item, 0);
};
