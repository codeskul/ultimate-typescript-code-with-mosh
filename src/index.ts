const small = 1;
const medium = 2;
const large = 3;

// Less optimized compiled javascript
enum Size {
  Small = 1,
  Medium,
  Large,
}

// More optimized compiled javascript
// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }

let mySize: Size = Size.Medium;
console.log(mySize);
