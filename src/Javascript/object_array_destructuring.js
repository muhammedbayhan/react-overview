//Object Array Destructuring
const person = { username: "Peter", age: 28, locations: "New York" };
const { username, age, locations } = person;
console.log(username, age, locations);

//Rest Operator
const person2 = { username: "Peter", age: 28, locations: "New York" };
const { username2, ...others } = person2;
console.log(username2, others, others.age);

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...otherNumbers] = numbers;
console.log(first, second, otherNumbers, otherNumbers[0]);
