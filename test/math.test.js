import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, mean } from '../src/math.js';

test('add sums two numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('mean returns the arithmetic mean of numbers', () => {
  assert.equal(mean([1, 2, 3]), 2);
  assert.equal(mean([4]), 4);
  assert.equal(mean([-3, 0, 6]), 1);
  assert.equal(mean([1, 2]), 1.5);
});

test('mean throws RangeError for an empty array', () => {
  assert.throws(() => mean([]), RangeError);
});
