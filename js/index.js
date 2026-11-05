let a1 = 1;
a1 = "hello";

function add(a, b) {
  return a + b; // no type checking, so this will work
}

console.log(add(1, 2)); // 3
