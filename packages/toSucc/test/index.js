import toSucc from '../src';

describe('toSucc', () => {
  it('converts a single char to its successor', () => {
    expect(toSucc('a')).toBe('b');
    expect(toSucc('A')).toBe('B');
  });

  it('converts all characters of a sentence to their successor', () => {
    expect(toSucc('LoremIpsum')).toBe('MpsfnJqtvn');
  });

  it('converts all non latin characters of a sentence to their successor', () => {
    expect(toSucc('κείμενο')).toBe('λζΰνζξπ');
    expect(toSucc('публикация')).toBe('рфвмйлбчйѐ');
    expect(toSucc('台匿名的打印机刻意打乱了')).toBe('叱區后皅扔危朻刼愐扔乲亇');
  });
});
