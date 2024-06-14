let numbers1: number[] = [1, 2, 3];

let numbers2 = []; // any[]
numbers2[0] = 1;
numbers2[1] = "1";

let numbers3 = [1, 2, "3"]; // (string | number)[]

numbers1.forEach((n) => n.toString); // n. auto sugest number properties because number1 is number[]
