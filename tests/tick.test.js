const test = require('node:test');
const assert = require('node:assert/strict');
const { calculateTickStats } = require('../src/tick');

test('calculateTickStats returns expected ATB values for a normal base speed and lead', () => {
  const result = calculateTickStats(100, 10);

  assert.equal(result.baseSpeed, 100);
  assert.equal(result.lead, 10);
  assert.equal(result.totemSpeed, 15);
  assert.equal(result.tick7, 80);
  assert.equal(result.tick6, 114);
  assert.equal(result.tick5, 161);
  assert.equal(result.tick4, 233);
  assert.equal(result.total7, 180);
  assert.equal(result.total6, 214);
  assert.equal(result.total5, 261);
  assert.equal(result.total4, 333);
});
