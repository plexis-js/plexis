## `@plexis/to-chars`

Splits input text into an array of characters
`npm i @plexis/to-chars`

**Usage**

```javascript
import toChars from '@plexis/to-chars';

toChars(); // => []
toChars(''); // => []
toChars(null); // => []
toChars('Hello world'); // => [ "H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d" ]
toChars(1); // => ['1']
toChars(2e5); // =>  ["2", "0", "0", "0", "0", "0"]
```

**Aliases**

```javascript
import {toChars} from 'plexis';
import {chars} from 'plexis';
```
