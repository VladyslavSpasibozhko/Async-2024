"use strict";

// Task: change `iterate` contract from callbacks to Promise
const iterate = (items) => {
  let index = 0;

  const chain = {
    next: () =>
      new Promise((fullfil) => {
        if (index < items.length) {
          fullfil(items[index++]);
        }
      }),
  };

  return chain;
};

const electronics = [
  { name: "Laptop", price: 1500 },
  { name: "Keyboard", price: 100 },
  { name: "HDMI cable", price: 10 },
];

(async () => {
  const chain = iterate(electronics);

  const tik = await chain.next();
  console.log(tik);

  const tik2 = await chain.next();
  console.log(tik2);

  const tik3 = await chain.next();
  console.log(tik3);
})();
