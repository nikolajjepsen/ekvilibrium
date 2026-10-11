import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, median } from '../src/math.js';

test('add sums two numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('median returns the middle value for an odd-length array', () => {
  assert.equal(median([3, 1, 2]), 2);
});

test('median averages the middle values for an even-length array', () => {
  assert.equal(median([4, 1, 3, 2]), 2.5);
});

test('median rejects an empty array', () => {
  assert.throws(() => median([]), RangeError);
});

test('median handles a single value', () => {
  assert.equal(median([7]), 7);
});

test('median sorts numerically and preserves the input array', () => {
  const numbers = [10, -2, 3, 3, 20];
  assert.equal(median(numbers), 3);
  assert.deepEqual(numbers, [10, -2, 3, 3, 20]);
});
