# `@plexis/toSnakeCase`

Converts the input text to camelCase.

**Installation**
`npm i @plexis/to-snake-case`

**Usage**

```javascript
import toSnakeCase from '@plexis/to-snake-case';

toSnakeCase('Cool'); // => 'cool'
toSnakeCase('cool mate'); // => 'cool_mate'
toSnakeCase('Hey how are you today?'); // => 'hey_how_are_you_today'
toSnakeCase('PascalCase'); // => 'pascal_case'
toSnakeCase('kebab-case'); // => kebab_case
```

**Aliases**

```javascript
import {toSnakeCase} from 'plexis';
import {snakeCase} from 'plexis';
```
