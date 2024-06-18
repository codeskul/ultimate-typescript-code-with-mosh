function greet(name: string) {
  console.log(name.toUpperCase());
}

// Shows error message
greet(null); // strictNullChecks: false to avoid error message

// Solution
function greet1(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("No name");
}

greet1(undefined); // strictNullChecks: false to avoid error message
