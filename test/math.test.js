import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, sum } from '../src/math.js';

test('add sums two numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('sum adds all numbers in an array', () => {
  assert.equal(sum([1, 2, 3]), 6);
  assert.equal(sum([-2, 0, 1.5]), -0.5);
});

test('sum returns zero for an empty array', () => {
  assert.equal(sum([]), 0);
});

test('sum rejects non-number elements', () => {
  for (const value of ['2', null, undefined, true, {}, [], 2n, Symbol('number')]) {
    assert.throws(() => sum([1, value, 3]), TypeError);
  }
});
