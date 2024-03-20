"use strict";

// Task: rewrite `total` method from callbacks to async method

class Basket {
  #items = null;

  constructor(items) {
    this.#items = items;
  }

  async total() {
    let result = 0;
    for (const item of this.#items) {
      if (item.price < 0) {
        new Error("Negative price is not allowed");
      }
      result += item.price;
    }

    return result;
  }
}

const electronics = [
  { name: "Laptop", price: 1500 },
  { name: "Keyboard", price: 100 },
  { name: "HDMI cable", price: 10 },
];

const basket = new Basket(electronics);
(async () => {
  try {
    const sum = await basket.total();
    console.log({ sum });
  } catch (err) {
    console.log(err.message);
  }
})();
