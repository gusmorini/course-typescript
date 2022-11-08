"use strict";
class Product {
    constructor(productName, productValue) {
        this.name = productName;
        this.value = productValue;
    }
}
const ps5 = new Product("Playstation 5", 4000);
const xbox = new Product("Xbox series X", 4000);
console.log("-- class", ps5, xbox);
let keyPix = "teste@teste.com";
console.log("-- keyPix:", keyPix);
let admin = true;
console.log("-- boolean", admin);
const category = ["comics", "horror", "comedy"];
const moviesYears = [];
for (let year = 1980; year <= new Date().getFullYear(); year++) {
    moviesYears.push(year);
}
console.log("-- array ", moviesYears);
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
console.log("--tuple", superset, daysWeek);
const configServer = {
    server: "Firestore",
    ip: "127:0.0.0.1",
    password: "123456",
};
console.log("--- object", configServer);
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 0] = "ADMIN";
    Permission[Permission["USER"] = 1] = "USER";
    Permission[Permission["READONLY"] = 2] = "READONLY";
})(Permission || (Permission = {}));
console.log("--enum", Permission);
//# sourceMappingURL=main.js.map