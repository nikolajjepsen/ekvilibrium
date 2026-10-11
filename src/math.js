/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
  return a + b;
}

/**
 * Returns the sum of an array of numbers.
 * @param {number[]} numbers
 * @returns {number}
 * @throws {TypeError} If an element is not a number.
 */
export function sum(numbers) {
  let total = 0;
  for (const number of numbers) {
    if (typeof number !== 'number') {
      throw new TypeError('Each element must be a number');
    }
    total += number;
  }
  return total;
}
