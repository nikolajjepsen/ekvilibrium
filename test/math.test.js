import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, clamp } from '../src/math.js';

test('add sums two numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('clamp limits values to the interval', () => {
  assert.equal(clamp(5, 0, 10), 5);
  assert.equal(clamp(-1, 0, 10), 0);
  assert.equal(clamp(11, 0, 10), 10);
});

test('clamp includes both boundaries and supports equal bounds', () => {
  assert.equal(clamp(0, 0, 10), 0);
  assert.equal(clamp(10, 0, 10), 10);
  assert.equal(clamp(-1, 5, 5), 5);
  assert.equal(clamp(5, 5, 5), 5);
  assert.equal(clamp(11, 5, 5), 5);
});

test('clamp rejects reversed bounds', () => {
  assert.throws(() => clamp(5, 10, 0), RangeError);
});
