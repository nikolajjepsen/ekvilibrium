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
 * Returns the largest number in an array.
 * @param {number[]} numbers
 * @returns {number}
 * @throws {RangeError} If the array is empty.
 * @throws {TypeError} If an element is not a number or is NaN.
 */
export function max(numbers) {
  if (numbers.length === 0) {
    throw new RangeError('The array must not be empty');
  }

  let largest = -Infinity;
  for (const number of numbers) {
    if (typeof number !== 'number' || Number.isNaN(number)) {
      throw new TypeError('Every element must be a number');
    }
    largest = Math.max(largest, number);
  }
  return largest;
}
