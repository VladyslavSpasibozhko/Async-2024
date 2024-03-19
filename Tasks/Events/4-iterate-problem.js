"use strict";

// Task: use `on` and `AsyncIterator` to iterate all items
// in purchase emitted `into EventEmitter`

const { EventEmitter, on } = require("node:events");

const purchase = new EventEmitter({ captureRejections: true });

const electronics = [
  { name: "Laptop", price: 1500 },
  { name: "Keyboard", price: 100 },
  { name: "HDMI cable", price: 10 },
];

const iterator = on(purchase, "add");

(async () => {
  for await (const [item] of iterator) {
    console.log(item);
  }
})();

let ms = 0;
for (const item of electronics) {
  ms += 1000;

  setTimeout(() => {
    purchase.emit("add", item);
  }, ms);
}
