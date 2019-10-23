import cache from '../src';

const toLower = x => x.toLowerCase();

it('works with basics', () => {
  const toLowerMock = jest.fn(key => {
    return toLower(key);
  });

  const toLowerCache = cache(toLowerMock);
  expect(toLowerCache('A')).toEqual('a');
  expect(toLowerCache('A')).toEqual('a');
  expect(toLowerMock.mock.calls.length).toEqual(1);
});

it('works with a resolver function', () => {
  const toLowerCacheWithResolver = cache(toLower, x => 'a');
  const toLowerCache = cache(toLower);
  expect(toLowerCacheWithResolver('A')).toEqual('a');
  expect(toLowerCacheWithResolver('B')).toEqual('a');
});

it('exposes a .cache object', () => {
  const toLowerCache = cache(toLower);
  toLowerCache('A');
  expect(toLowerCache.cache.get('A')).toEqual('a');
});
