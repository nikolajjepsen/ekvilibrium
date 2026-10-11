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
 * Clamps a number to the inclusive interval [min, max].
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 * @throws {RangeError} If min is greater than max.
 */
export function clamp(value, min, max) {
  if (min > max) {
    throw new RangeError('min must not be greater than max');
  }
  return Math.min(Math.max(value, min), max);
}
