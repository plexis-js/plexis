import toSucc from '../src';

it('converts a single char to its successor', () => {
  expect(toSucc('a')).toBe('b');
  expect(toSucc('A')).toBe('B');
});

it('converts a sentence to its successor', () => {
  expect(toSucc('LoremIpsum')).toBe('MpsfnJqtvn');
});

it('converts a sentence for other languages', () => {
  expect(toSucc('κείμενο')).toBe('λζΰνζξπ');
  expect(toSucc('публикация')).toBe('рфвмйлбчйѐ');
  expect(toSucc('台匿名的打印机刻意打乱了')).toBe('叱區后皅扔危朻刼愐扔乲亇');
});
