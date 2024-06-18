type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer.birthday); // Error 'customer' is possibly 'null'
if (customer !== null && customer !== undefined) console.log(customer.birthday); // Solution 1
console.log(customer?.birthday); // Solution 2 Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customer?.[0]

// Optional call
let log: any = null;
log("a"); // Runtime error
log?.("a"); // Solution
