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
 * Returns the median without modifying the input array.
 * @param {number[]} numbers
 * @returns {number}
 * @throws {RangeError} If the array is empty.
 */
export function median(numbers) {
  if (numbers.length === 0) {
    throw new RangeError('Cannot calculate the median of an empty array');
  }

  const sorted = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[middle - 1] + sorted[middle]) / 2
    : sorted[middle];
}
