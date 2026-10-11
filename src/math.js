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
 * Returns the arithmetic mean of an array of numbers.
 * @param {number[]} numbers
 * @returns {number}
 * @throws {RangeError} If the array is empty.
 */
export function mean(numbers) {
  if (numbers.length === 0) {
    throw new RangeError('Cannot calculate the mean of an empty array');
  }

  return numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
}
