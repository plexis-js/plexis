## `@plexis/to-capitals`

Converts the first character of the input text to upper case. If the second parameter is true, the method converts the rest of the subject to lower case.

`npm i @plexis/to-capitals`

**Usage**

```javascript
import toCapitals from '@plexis/to-capitals';

toCapitals('foo Bar'); // returns 'Foo Bar'
toCapitals('fOO Bar'); // returns 'FOO Bar'
toCapitals('fOO Bar', true); // returns 'Foo bar'
```

**Aliases**

```javascript
import toCapitals from '@plexis/to-capitals';
import {toCapitals, toFirstCapital, capitalize} from 'plexis';
```
