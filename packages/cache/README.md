## `@plexis/cache`

A caching mechanism for string operations.

`npm i @plexis/cache`

**Usage**

```javascript
import cache from '@plexis/cache';

const toLower = x => x.toLowerCase();
const toLowerCache = cache(toLower);

// We are adding a dummy resolver function which returns the same cache every single time
const toLowerCacheWithResolver = cache(toLower, x => 'a');

toLowerCache('A'); // returns a;
toLowerCache('B'); // returns b;

toLowerCacheWithResolver('A'); // returns a;
toLowerCacheWithResolver('B'); // returns a !!;
```

**Aliases**

```javascript
import cache from '@plexis/cache';
import {cache, memoize} from 'plexis';
```
