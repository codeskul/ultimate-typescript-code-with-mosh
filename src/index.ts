let user: [number, string] = [1, "Sanjay"];

user[0].toString(); // auto suggest number functions
user[1].toLowerCase(); // auto suggest string functions

user.push(1); // in tupples typescript dont show any error message and consider it as regular array
