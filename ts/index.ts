let a: string = "1";
a = "hello";

function add1(a: number, b: number): number {
  return a + b; // type checking
}

console.log(add1(1, 2)); // 3
