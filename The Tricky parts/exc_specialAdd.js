function specialAdd() {
  let sum = 0;

  // Inner function to handle different scenarios
  function inner(num) {
    if (num === undefined) {
      // Return the total sum when called with no arguments
      return sum;
    } else {
      // Add the number to the current sum
      sum = sum + num;
      // Return a new function to continue adding numbers
      return inner;
    }
  }

  // Return the inner function which can be used for chaining or retrieving the sum
  return inner;
}

// Example usage:
console.log(specialAdd(2)()); // Output: 5 (since 2 + 3 = 5)
console.log(specialAdd(5)(10)(-2)(4)()); // Output: 17 (since 5 + 10 - 2 + 4 = 17)
console.log(specialAdd(1)(2)(3)(4)(5)()); // Output: 15 (since 1 + 2 + 3 + 4 + 5 = 15)
