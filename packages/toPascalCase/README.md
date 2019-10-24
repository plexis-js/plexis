## `toPascalCase`

Converts the input text to pascal case

`npm i @plexis/name-of-the-module`

**Usage**

```javascript
import toPascalCase from '@plexis/to-pascal-case';

toPascalCase('Cool');
// => 'Cool'

toPascalCase('cool mate');
// => 'CoolMate'

toPascalCase('Hey how are you today?');
// => 'HeyHowAreYouToday'

toPascalCase('camelCase');
// => 'CamelCase'

toPascalCase('kebab-case');
// => KebabCase
```

**Aliases**

```javascript
import toPascalCase from '@plexis/to-pascal-case';
import {toPascalCase, classify} from 'plexis';
```
