# `@plexis/toCamelCase`

Converts the input text to camelCase.

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
import {camelCase} from 'plexis';
import {camelize} from 'plexis';
```
