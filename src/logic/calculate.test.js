import calculate from './calculate';

describe('test all calculator functions', () => {
  test('will return the value of 4 by adding 2 + 2', () => {
    expect(calculate({ total: '2', next: '2', operation: '+' }, '=')).toEqual({ next: null, operation: null, total: '4' });
  });
  test('will return the value of 10 by adding 20 - 10', () => {
    expect(calculate({ total: '20', next: '10', operation: '-' }, '=')).toEqual({ next: null, operation: null, total: '10' });
  });
  test('will return the value of 15 by adding 5 x 3', () => {
    expect(calculate({ total: '5', next: '3', operation: 'x' }, '=')).toEqual({ next: null, operation: null, total: '15' });
  });
  test('will return the value of 3 by adding 9 ÷ 3', () => {
    expect(calculate({ total: '9', next: '3', operation: '÷' }, '=')).toEqual({ next: null, operation: null, total: '3' });
  });
});
