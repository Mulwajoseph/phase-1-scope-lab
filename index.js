
// Declare a variable in global scope called customerName using the var keyword and assign it the value 'bob'.
var customerName = 'bob';

// Write a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

upperCaseCustomerName();
console.log(customerName)

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  // Declaring a variable in global scope from inside a function (for demonstration purposes).
  bestCustomer = 'not bob';
}

// See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable to 'maybe bob'.
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Now declare a constant (using the const keyword) in global scope called leastFavoriteCustomer; be sure to assign it some initial value.
const leastFavoriteCustomer = 'John Doe'; // You can replace 'John Doe' with any other initial value.

// Write a function called changeLeastFavoriteCustomer() that attempts to change that constant.
function changeLeastFavoriteCustomer() {
  // Trying to change the value of a constant (will result in an error in strict mode).
  leastFavoriteCustomer = 'Jane Doe';
}

// Output examples
console.log(customerName); // Output: bob
console.log(upperCaseCustomerName()); // Output: BOB

setBestCustomer();
console.log(bestCustomer); // Output: not bob

overwriteBestCustomer();
console.log(bestCustomer); // Output: maybe bob

console.log(leastFavoriteCustomer); // Output: John Doe

changeLeastFavoriteCustomer(); // This will result in an error when running in strict mode.
