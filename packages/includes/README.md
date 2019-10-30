# `@plexis/includes`

Checks if the search is part of the input string in the given position

**Installation**
`npm i @plexis/includes`

**Usage**

```javascript
import includes from '@plexis/includes';

includes(); // => false
includes(''); // => false
includes('', ''); // => true
includes('Foo', 'Foo'); // => true
includes('Foo', 'Foo'); // => true
includes('Foo', 'Foo', 2); // => false
includes('Foo', 'oo'); // => true
includes('Foo', 'Oo'); // => false
```

**Aliases**

```javascript
import includes from '@plexis/includes';
import {includes, has} from 'plexis';
```
