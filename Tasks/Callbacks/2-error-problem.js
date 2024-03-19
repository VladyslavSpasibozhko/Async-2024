// "use strict";

// // Task: return an error for items with negative price
// // Hint: use callback-last-error-first contract

// const total = (items, callback) => {
//   let result = 0;
//   for (const item of items) {
//     result += item.price;
//   }
//   callback(result);
// };

// const electronics = [
//   { name: "Laptop", price: -1500 },
//   { name: "Keyboard", price: 100 },
//   { name: "HDMI cable", price: 10 },
// ];

// total(electronics, (money) => {
//   console.log({ money });
// });

"use strict";

const total = (items, callback) => {
  let result = 0;
  for (const item of items) {
    if (item.price < 0) {
      callback(new Error("Price can not be negative"));
      return;
    }

    result += item.price;
  }
  callback(null, result);
};

const electronics = [
  { name: "Laptop", price: -100 },
  { name: "Keyboard", price: 100 },
  { name: "HDMI cable", price: 10 },
];

total(electronics, (error, money) => {
  if (error) console.log({ error: error.message });
  else console.log({ money });
});
