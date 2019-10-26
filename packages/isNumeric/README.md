# `@plexis/isNumeric`

Validates if argument is valid numeric value.

**Installation**
`npm i @plexis/is-numeric`

**Usage**

```javascript
import isNumeric from '@plexis/is-numeric';

isNumeric('1000');
// => true

isNumeric('Infinity');
// => true

isNumeric('-100.4');
// => true

isNumeric('1E+2');
// => true

isNumeric('0xFF');
// => true

isNumeric('-');
// => false

isNumeric('one');
// => false
```

**Aliases**

```javascript
import {isNum} from 'plexis';
import {isNumeric} from 'plexis';
```
