# `@plexis/toCamelCase`

Convert given string to camel case

**Installation**
`npm i @plexis/to-camel-case`

**Usage**

```javascript
import toCamelCase from '@plexis/to-camel-case';

toCamelCase('Cool'); //=> 'cool'
toCamelCase('cool mate'); // => 'coolMate'
toCamelCase('Hey how are you today?'); // => 'heyHowAreYouToday'
toCamelCase('PascalCase'); // => 'pascalCase'
toCamelCase('kebab-case'); // => kebabCase
```

**Aliases**

```javascript
import {toCamelCase} from 'plexis';
import {toCamel} from 'plexis';
```
