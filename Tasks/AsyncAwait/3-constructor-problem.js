"use strict";

// Task: rewrite class Basket to class Total with async constructor
// Constructor call example:
//   const total = await new Total(electronics);
//   console.log({ total });

class Total {
  constructor(items) {
    return this.#total(items);
  }

  async #total(items) {
    let result = 0;
    for (const item of items) {
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

(async () => {
  try {
    const total = await new Total(electronics);
    console.log({ total });
  } catch (err) {
    console.log(err.message);
  }
})();
