import toPred from '../src';

it('converts a single char to its predecessor', () => {
  expect(toPred('b')).toBe('a');
  expect(toPred('B')).toBe('A');
});

it('converts a sentence to its predecessor', () => {
  expect(toPred('LoremIpsum')).toBe('KnqdlHortl');
});

it('converts a sentence its predecessor for other languages as well', () => {
  expect(toPred('κείμενο')).toBe('ιδήλδμξ');
  expect(toPred('публикация')).toBe('отакзйЯхзю');
  expect(toPred('台匿名的打印机刻意打乱了')).toBe('可匾同皃扒卯朹刺愎扒买亅');
});
