import operate from './operate';

describe('operate', () => {
  test('should return the result of 10 following the next operation ', () => {
    expect(operate('7', '3', '+')).toEqual('10');
  });
  test('should return the result of 4 following the next operation ', () => {
    expect(operate('7', '3', '-')).toEqual('4');
  });
  test('should return the result of 9 following the next operation ', () => {
    expect(operate('3', '3', 'x')).toEqual('9');
  });
  test('should return the result of 2 following the next operation ', () => {
    expect(operate('10', '5', '÷')).toEqual('2');
  });
});
