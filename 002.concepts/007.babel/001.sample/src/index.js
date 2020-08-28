
import "./react";

console.log('Hello babel.');

let num = 1;
const add = (x, y) => {
  return x + y;
};
num = add(num, num);
console.log(num);

new Promise((resolve) => {
  setTimeout(resolve, 1000);
}).then(() => {
  console.log('Promise');
});


