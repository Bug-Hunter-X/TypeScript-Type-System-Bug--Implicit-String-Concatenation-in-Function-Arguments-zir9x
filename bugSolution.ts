function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: arguments must be numbers.');
  }
  return a + b;
}

let result1 = add(1, '2'); // Prints 12, type error not caught 
console.log(result1);

try {
  let result2 = addSafe(1, '2'); // Throws an error
  console.log(result2);
} catch (error) {
  console.error(error.message); // Correct error message
}

let result3 = addSafe(1, 2); // Works correctly
console.log(result3); // Prints 3