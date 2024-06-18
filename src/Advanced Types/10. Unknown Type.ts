function render(document: any) {
  // we can call any method there are no any type checking
  document.move();
  document.fly();
  document.whateverWeWant();
}

// solution
function render1(document: unknown) {
  // shows error
  document.move();
  document.fly();
  document.whateverWeWant();
}
function render2(document: unknown) {
  // solution
  // Narrowing
  if (typeof document === "string") {
    document.toUpperCase(); // all strings methods
  }
}
