## `isAlphaNumeric`

Checks whether the input is a string containing only alphanumeric characters.

`npm i @plexis/is-alphanumeric`

**Usage**

```javascript
import isAlphaNumeric from '@plexis/is-alphanumeric';

isAlphaNumeric('foo123BAR'); // returns true
isAlphaNumeric('1.0'); // returns false
isAlphaNumeric('bar!'); // returns false
isAlphaNumeric(''); // returns false
```

**Aliases**

```javascript
import isAlphaNumeric from '@plexis/is-alphanumeric';
import {isAlphaNumeric, isAlphanumeric, isAlphaDigit} from 'plexis';
```
