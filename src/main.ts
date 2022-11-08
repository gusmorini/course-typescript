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
console.log("-- class", ps5, xbox);

/*
 * union types
 */
let keyPix: string | number = "teste@teste.com";
console.log("-- keyPix:", keyPix);

/*
 * boolean
 */
let admin: boolean = true;
console.log("-- boolean", admin);

/*
 * array
 */
const category: (string | number)[] = ["comics", "horror", "comedy"];
const moviesYears: Array<number | string> = [];
for (let year = 1980; year <= new Date().getFullYear(); year++) {
  moviesYears.push(year);
}
console.log("-- array ", moviesYears);

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

console.log("--tuple", superset, daysWeek);

/*
 * objects
 */
const configServer: object = {
  server: "Firestore",
  ip: "127:0.0.0.1",
  password: "123456",
};

console.log("--- object", configServer);

/**
 * enum
 */
enum Permission {
  ADMIN,
  USER,
  READONLY,
}

console.log("--enum", Permission);
