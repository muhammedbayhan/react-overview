//Rest Spread Operator

let user = { name: "John Doe", age: 25, email: " [email protected]" };
console.log(user);
user = { ...user, email: " johndoe@gmail.com" };
console.log(user);
