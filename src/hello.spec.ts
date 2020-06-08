import { Hello } from './hello';

describe('Hello', () => {
  test('Return an array of unique characters for the given value', () => {
    const result = Hello('Woorrrrld');

    expect(result).toEqual('Hello Woorrrrld');
  });
});
