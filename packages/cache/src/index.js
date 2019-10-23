/**
 * @param {Function} [func] The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the caching mechanism.
 * @returns {Function} Returns the new memoized function.
 */
const cache = (func, resolver) => {
  if (typeof resolver !== 'function') {
    resolver = null;
  }
  const cached = key => {
    key = resolver ? resolver.call(this, key) : key;
    const _cache = cached.cache;

    if (_cache.has(key)) {
      return _cache.get(key);
    }

    const result = func.call(this, key);
    cached.cache = _cache.set(key, result) || cache;
    return result;
  };

  const CacheConstructor = cache.Cache || Map;
  cached.cache = new CacheConstructor();
  return cached;
};

cache.Cache = Map;

export default cache;
