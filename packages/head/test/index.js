import head from '../src';

describe('returns the first length characters from the input text', () => {
  const cases = [{text: 'John'}, {text: 'Doe', length: 2}, {text: 'Hello', length: 100}];
  const expected = ['J', 'Do', 'Hello'];

  cases.forEach(({text, length}, i) => {
    test(`head(${text},${length})`, () => {
      expect(head(text, length)).toBe(expected[i]);
    });
  });
});

test('returns empty string if there is no input text provided', () => {
  expect(head()).toBe('');
});

describe('throws error if text is invalid', () => {
  const invalids = [null, NaN, {key: 'value'}, ['invalid'], 55];

  invalids.forEach(invalid => {
    test(`head(${invalid})`, () => {
      expect(() => {
        head(invalid);
      }).toThrow();
    });
  });
});

describe('throws error if length is invalid', () => {
  const invalids = [NaN, null, '55', {key: 'value'}, ['invalid']];

  invalids.forEach(invalid => {
    test(`head('Hello',${invalid})`, () => {
      expect(() => {
        head('Hello', invalid);
      }).toThrow();
    });
  });
});
