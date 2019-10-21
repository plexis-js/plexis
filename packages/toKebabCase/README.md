## `@plexis/toKebabCase`

Converts a string to its equivalent successor.

**Installation**
`npm i @plexis/toKebabCase`

**Usage**

```javascript
import toKebabCase from '@plexis/to-kebab-case';

toKebabCase('Cool'); // returns 'cool'
toKebabCase('cool mate'); // returns 'cool-mate'
toKebabCase('Hey how are you today?'); // returns 'hey-how-are-you-today'
toKebabCase('camelCase'); // returns 'camel-case'
toKebabCase('PascalCase'); // returns pascal-case
```

**Aliases**

```javascript
import {toKebabCase} from 'plexis';
import {slugify} from 'plexis';
import {dasherize} from 'plexis';
```
