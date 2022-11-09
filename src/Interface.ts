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
