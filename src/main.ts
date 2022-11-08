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

console.log(ps5, xbox);

/** baana 123 */
