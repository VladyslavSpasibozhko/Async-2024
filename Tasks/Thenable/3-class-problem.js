"use strict";

// Task: rewrite to `class Iterator` implementing
// Thenable contract with private fields.
class Iterator {
  #items = [];
  #index = 0;

  constructor(items) {
    this.#items = items;
  }

  then(resolve, reject) {
    if (this.#items.length > this.#index) {
      resolve(this.#items[this.#index++]);
    } else {
      reject(new Error("No more items provided"));
    }
  }
}

const iterate = (items) => {
  let index = 0;
  return {
    then(fulfill /*reject*/) {
      if (index < items.length) {
        fulfill(items[index++]);
      }
    },
  };
};

const electronics = [
  { name: "Laptop", price: 1500 },
  { name: "Keyboard", price: 100 },
  { name: "HDMI cable", price: 10 },
];

(async () => {
  const items = new Iterator(electronics);
  // Use `new Iterator(electronics)`
  const item1 = await items;
  console.log(item1);
  const item2 = await items;
  console.log(item2);
  const item3 = await items;
  console.log(item3);
  const item4 = await items;
  console.log(item4);
})();
