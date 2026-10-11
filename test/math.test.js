import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, max } from '../src/math.js';

test('add sums two numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('max returns the largest number', () => {
  assert.equal(max([1, 5, 3]), 5);
  assert.equal(max([-3, -1, -5]), -1);
  assert.equal(max([2]), 2);
  assert.equal(max([1.5, 2.5, 2]), 2.5);
  assert.equal(max([-Infinity]), -Infinity);
  assert.equal(max([Infinity, 1]), Infinity);
});

test('max rejects an empty array', () => {
  assert.throws(() => max([]), RangeError);
});

test('max rejects non-numeric elements', () => {
  for (const value of ['5', null, undefined, true, {}, [], NaN]) {
    assert.throws(() => max([1, value, 3]), TypeError);
  }
  assert.throws(() => max([Infinity, '5']), TypeError);
});
