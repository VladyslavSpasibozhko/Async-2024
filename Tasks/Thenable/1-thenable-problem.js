"use strict";

// Task: change `iterate` contract from callbacks to Thenable
const iterate = (items) => {
  let count = 0;

  const thenable = {
    then(fulfill) {
      fulfill(items[count++]);
    },
  };

  return thenable;
};

const electronics = [
  { name: "Laptop", price: 1500 },
  { name: "Keyboard", price: 100 },
  { name: "HDMI cable", price: 10 },
];

// Use await syntax to get items
// iterate(electronics, (item) => {
//   console.log(item);
// });

(async () => {
  const items = iterate(electronics);
  const item1 = await items;
  console.log(item1);
  const item2 = await items;
  console.log(item2);
  const item3 = await items;
  console.log(item3);
})();
