// noUnusedParameters: true shows ERROR
function calculateTax0(income: number): number {
  return 0;
}
// function with return type number
function calculateTax1(income: number): number {
  return income * 1.2;
}

// noImplicitReturns: true shows ERROR
function calculateTax2(income: number) {
  if (income < 50_000) return income * 1.2;
  // undefined
}

// noImplicitReturns: true ERROR solve
function calculateTax3(income: number) {
  if (income < 50_000) return income * 1.2;
  return income * 1.3;
}

// noUnusedLocals: true shows ERROR
function calculateTax4(income: number): number {
  let x = 10;
  if (income < 50_000) return income * 1.2;
  return income * 1.3;
}

function calculateTax5(income: number, taxYear?: number): number {
  if ((taxYear || 2022) < 2024) return income * 1.2;
  return income * 1.3;
}
function calculateTax6(income: number, taxYear = 2022): number {
  if (taxYear < 2024) return income * 1.2;
  return income * 1.3;
}

calculateTax5(10_000, 2022);
