// number
let a = 100;
// string
let b = "Coffee";
// Boolean[]
let c = [true, false, false];
// {age:number}
let d = { age: 20 };
// number[]
let e = [3];
// any
let f;
// any[]
let g = [];

let song: {
  title: string;
  releaseYear: number;
} = { title: "My song", releaseYear: 2024 };
let prices: (string | number)[] = [100, 200, 300];
prices[0] = "$100";
function myFunc(a: number, b: number): number {
  return a + b;
}
