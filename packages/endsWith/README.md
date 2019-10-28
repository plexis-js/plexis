# `endsWith`

Checks whether the input text ends with the given pattern

`npm i @plexis/ends-with`

## Usage

```javascript
import endsWith from '@plexis/ends-with';

const txt = 'This is me';

endsWith(txt, 'is me'); // true
endsWith(txt, 'is m', txt.length - 1); // true
endsWith(txt, 'is m', txt.length); // false
endsWith(txt, 'Foo'); // false
```
