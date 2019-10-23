import toPred from '../src';

describe('toPred', () => {
  it('converts a single char to its predecessor', () => {
    expect(toPred('b')).toBe('a');
    expect(toPred('B')).toBe('A');
  });

  it('converts all characters of a sentence to their predecessor', () => {
    expect(toPred('LoremIpsum')).toBe('KnqdlHortl');
  });

  it('converts all non latin characters of a sentence to their predecessor', () => {
    expect(toPred('κείμενο')).toBe('ιδήλδμξ');
    expect(toPred('публикация')).toBe('отакзйЯхзю');
    expect(toPred('台匿名的打印机刻意打乱了')).toBe('可匾同皃扒卯朹刺愎扒买亅');
  });
});
