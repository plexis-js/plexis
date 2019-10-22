## `isNumeric`

Checks whether the input is a string representation of a numeric value.

`npm i @plexis/is-numeric`

**Usage**

```javascript
import isLowerCase from '@plexis/is-numeric';

isNumeric('1'); // returns true
isNumeric('1.5'); // returns true
isNumeric('1E-2'); // returns true
isNumeric('Foo'); // returns false
isNumeric('BAR'); // returns false
```
