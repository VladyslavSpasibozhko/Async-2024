// 'use strict';

// // Task: refactor callback hell code with named callbacks
// // Restriction: you can change code only in "Usage" section

// const getPurchase = (callback) => callback({
//   Electronics: [
//     { name: 'Laptop', price: 1500 },
//     { name: 'Keyboard', price: 100 },
//     { name: 'HDMI cable', price: 10 },
//   ],
//   Textile: [
//     { name: 'Bag', price: 50 },
//   ],
// });

// const iterateGroups = (order, callback) => {
//   for (const groupName in order) {
//     const group = order[groupName];
//     callback(group);
//   }
// };

// const groupTotal = (items, callback) => {
//   let total = 0;
//   for (const item of items) {
//     total += item.price;
//   }
//   callback(total);
// };

// const budget = (limit) => {
//   let balance = limit;

//   const withdraw = (value, callback) => {
//     const success = balance >= value;
//     if (success) balance -= value;
//     callback(success);
//   };

//   const rest = (callback) => callback(balance);

//   return { withdraw, rest };
// };

// // Usage

// const wallet = budget(1650);

// getPurchase((purchase) => {
//   let amount = 0;
//   iterateGroups(purchase, (group) => {
//     groupTotal(group, (subtotal) => {
//       wallet.withdraw(subtotal, (success) => {
//         if (success) amount += subtotal;
//         wallet.rest((balance) => {
//           console.log({ success, amount, subtotal, balance });
//         });
//       });
//     });
//   });
// });

"use strict";

const getPurchase = (callback) =>
  callback({
    Electronics: [
      { name: "Laptop", price: 1500 },
      { name: "Keyboard", price: 100 },
      { name: "HDMI cable", price: 10 },
    ],
    Textile: [
      { name: "Bag", price: 50 },
      { name: "HDMI cable", price: 10 },
    ],
  });

const iterateGroups = (order, callback) => {
  for (const groupName in order) {
    const group = order[groupName];
    callback(group);
  }
};

const groupTotal = (items, callback) => {
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  callback(total);
};

const budget = (limit) => {
  let balance = limit;

  const withdraw = (value, callback) => {
    const success = balance >= value;
    if (success) balance -= value;
    callback(success);
  };

  const rest = (callback) => callback(balance);

  return { withdraw, rest };
};

// Usage

const wallet = budget(1650);
let amount = 0;

const notify = (success, sum) => {
  if (success) amount += sum;

  wallet.rest((balance) => {
    console.log({ success, amount, sum, balance });
  });
};

const withdraw = (sum) => {
  wallet.withdraw(sum, (success) => notify(success, sum));
};

const calculateGroup = (group) => {
  groupTotal(group, withdraw);
};

getPurchase((purchase) => {
  iterateGroups(purchase, calculateGroup);
});
