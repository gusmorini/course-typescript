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
 */

const element: HTMLHeadingElement | null = document.querySelector("div");
let db: string | null = "mysql, 127.0.0.1, password";
db = null;

let myVariable: undefined | string = undefined;
myVariable = "text in variable accepter";

/**
 * any
 */

let value: any;

/**
 * unknown
 */

let result: unknown;
result = {
  success: true,
};
result = "yes very nice bro";
result = 200;
