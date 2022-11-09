"use strict";
const myAddress = {
    street: "rua progresso",
    number: 901,
    city: "maria helena",
};
const myBrotherAddress = {
    street: "rua piedade",
    number: 1791,
    city: "maria helena",
};
const prod1 = {
    name: "playstation 5",
    price: 4000,
    description: "console ps5",
};
const prod2 = {
    name: "coca-cola 2L",
    price: 8.0,
    description: "refrigerante de cola",
    validity: new Date("2022-12-12"),
};
const curse1 = {
    title: "typescript",
    price: 27.9,
    workload: 10,
    classification: 5,
};
const sum1 = (num1, num2) => {
    return num1 + num2;
};
const sum2 = (num1, num2) => {
    return num1 + num2;
};
const multipliesNumbers = (a, b) => a * b;
const dividedNumbers = (a, b) => a / b;
const calc = {
    sum: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiplies: multipliesNumbers,
    divided: dividedNumbers,
};
const frontEnd = {
    id: 1,
    name: "Front-End",
};
const backEnd = {
    id: 2,
    name: "Back-End",
};
const css = {
    id: 3,
    name: "CSS",
    belongs: frontEnd,
};
const php = {
    id: 4,
    name: "PHP",
    belongs: backEnd,
};
const menu = {
    categories: [frontEnd, backEnd, css, php],
};
const myTodos = ["javascript", "typescript", "php", 2000, true, backEnd];
const jorge = {
    id: 1,
    created_at: new Date().getTime(),
    updated_at: new Date().getTime(),
    name: "jorge da silva",
    age: 50,
    email: "jorge@teste",
    password: "123456",
};
//# sourceMappingURL=Interface.js.map