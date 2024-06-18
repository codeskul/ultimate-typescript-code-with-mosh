let phone = document.getElementById("phone");
// if element is following
// HTMLElement
// HTMLInputElement
phone.value; // then it will show error to accesing value property

let phone1 = document.getElementById("phone") as HTMLInputElement; // solution
phone1.value;

let phone2 = <HTMLInputElement>document.getElementById("phone"); // solution
phone2.value;
