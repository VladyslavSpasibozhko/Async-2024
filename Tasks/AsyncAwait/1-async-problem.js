"use strict";

// Task: rewrite `total` from callbacks contract to async/await
// Hint: do not forget to catch errors with try/catch block

const total = async (items) => {
  let result = 0;
  for (const item of items) {
    if (item.price < 0) {
      new Error("Negative price is not allowed");
    }
    result += item.price;
  }

  return result;
};

const electronics = [
  { name: "Laptop", price: 1500 },
  { name: "Keyboard", price: 100 },
  { name: "HDMI cable", price: 10 },
];

(async () => {
  try {
    const sum = await total(electronics);
    console.log({ sum });
  } catch (err) {
    console.log(err.message);
  }
})();
