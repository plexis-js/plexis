import toChunks from '../src';

it('create chunks with default chunksize', () => {
  expect(toChunks('Hello world')).toStrictEqual([
    'H',
    'e',
    'l',
    'l',
    'o',
    ' ',
    'w',
    'o',
    'r',
    'l',
    'd'
  ]);
});

it('create chunks of empty strings', () => {
  expect(toChunks('   ')).toStrictEqual([' ', ' ', ' ']);
});

it('create chunks for chunk size equal 2', () => {
  expect(toChunks('1234567', 2)).toStrictEqual(['12', '34', '56', '7']);
});

it('create chunks for chunk size equal 6', () => {
  expect(toChunks('1234567', 6)).toStrictEqual(['123456', '7']);
});
