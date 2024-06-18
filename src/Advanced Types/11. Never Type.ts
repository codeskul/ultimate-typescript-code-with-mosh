function reject(message: string): never {
  throw new Error(message);
}

function processEvents(): never {
  while (true) {
    // Read a message from a queue
  }
}

// this function never returns any value
// processEvents();
reject("...");

console.log("hello world!"); //  allowUnreachableCode: false shows error Unreachable code
