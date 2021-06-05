let math = require('./calc');
describe('测试calc', () => {
  test('1+1=2', () => {
    expect(math.sum(1, 1)).toBe(2);
});
test('1-1=0', () => {
    expect(math.minus(1, 1)).toBe(0);
});
});
