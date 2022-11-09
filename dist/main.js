"use strict";
class Product {
    constructor(productName, productValue) {
        this.name = productName;
        this.value = productValue;
    }
}
const ps5 = new Product("Playstation 5", 4000);
const xbox = new Product("Xbox series X", 4000);
let keyPix = "teste@teste.com";
let admin = true;
const category = ["comics", "horror", "comedy"];
const moviesYears = [];
for (let year = 1980; year <= new Date().getFullYear(); year++) {
    moviesYears.push(year);
}
let superset = ["typescript", 2011, "anders"];
let daysWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
const configServer = {
    server: "Firestore",
    ip: "127:0.0.0.1",
    password: "123456",
};
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 0] = "ADMIN";
    Permission[Permission["USER"] = 1] = "USER";
    Permission[Permission["READONLY"] = 2] = "READONLY";
})(Permission || (Permission = {}));
let db = "mysql, 127.0.0.1, password";
db = null;
let myVariable = undefined;
myVariable = "text in variable accepter";
let value;
let result;
result = {
    success: true,
};
result = "yes very nice bro";
result = 200;
const myConsole = console.log("Hello my friends");
function consoleDate() {
    console.log(Date.now());
}
function showError(message) {
    throw new Error(message);
}
let n = 0;
function loopInfinite() {
    while (true) {
        console.log(n++);
    }
}
//# sourceMappingURL=main.js.map