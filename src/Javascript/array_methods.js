//Array Methods

const products = [
  { name: "watch", price: 4000 },
  { name: "shoe", price: 2000 },
  { name: "shirt", price: 500 },
  { name: "laptop", price: 32000 },
  { name: "mobile", price: 12000 },
];
const userName = "John Doe";

//1. find() - returns the first element that satisfies the condition
const foundProduct = products.find((product) => product.price > 10000);
console.log(foundProduct);

//2. some() - returns true if at least one element satisfies the condition
const hasInexpensiveProducts = products.some((product) => product.price < 1000);
console.log(hasInexpensiveProducts);

//3. every() - returns true if all elements satisfy the condition
const hasAllInexpensiveProducts = products.every(
  (product) => product.price < 1000
);
console.log(hasAllInexpensiveProducts);

//4. includes() - returns true if the array contains the element
const userNameIncludes = userName.includes("John");
console.log(userNameIncludes);

//5. map() - returns a new array with the results of calling a function on every element
const productNames = products.map((product) => product.name);
console.log(productNames);

//6. filter() - returns a new array with the elements that satisfy the condition
const expensiveProducts = products.filter((product) => product.price > 10000);
console.log(expensiveProducts);

//7. reduce() - returns a single value after reducing the array
const totalPrice = products.reduce(
  (total, product) => total + product.price,
  0
);
console.log(totalPrice);
