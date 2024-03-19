"use strict";

// Task: rewrite error handling to use callback-last-error-first
// contract to return errors instead of throwing them.
// So remove all try/catch blocks and pass errors to callbacks.
// Hint: You may also use error.cause to wrap escalated errors.
// Extra credit task: use AggregateError to combine escalated errors.
// Extra credit task: fix eslint error: "Function declared in a loop
//   contains unsafe references to variable(s) 'total'  no-loop-func"

const MAX_PURCHASE = 2000;

const calculateSubtotal = (goods, callback) => {
  let amount = 0;

  for (const item of goods) {
    if (typeof item.name !== "string") {
      callback(new Error("Noname in item in the bill"));
      return;
    }

    if (typeof item.price !== "number") {
      callback(new Error(`${item.name} price expected to be number`));
      return;
    }

    if (item.price < 0) {
      callback(new Error(`Negative price for ${item.name}`));
      return;
    }

    amount += item.price;
  }

  callback(null, amount);
};

const calculateTotal = (order, callback) => {
  const errors = [];
  const expenses = new Map();
  let total = 0;

  for (const groupName in order) {
    const goods = order[groupName];

    calculateSubtotal(goods, (error, amount) => {
      if (error) {
        errors.push(error);
        return;
      }

      total += amount;
      expenses.set(groupName, amount);
    });

    if (total > MAX_PURCHASE) {
      errors.push(new Error("Total is above the limit"));
      break;
    }
  }

  if (errors.length) {
    const cause = new AggregateError(errors, "Caused by");
    callback(new Error("Calculation was not successful", { cause }));
    return;
  }

  callback(null, { total, expenses });
  return;
};

const purchase = {
  Electronics: [
    { name: "Laptop", price: 1500 },
    { name: "Keyboard", price: 100 },
    { name: "HDMI cable" },
  ],
  Textile: [{ name: "Bag", price: 50 }, { price: 20 }],
};

calculateTotal(purchase, (error, bill) => {
  if (error) {
    console.log("Error detected");
    console.error(error);
    return;
  }

  console.log(bill);
});
