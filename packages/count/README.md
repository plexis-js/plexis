## `nameOfTheModule`

Return the number of characters in the input text.

`npm i @plexis/count`

**Usage**

```javascript
import count from '@plexis/count';

count(); // returns 0
count(''); // returns 0
count('Hello') // returns 5
count('Hello   ') // returns 8
count('Hello   ', char => char !== ' ') // returns 5

```

**Aliases**

```javascript
import count from '@plexis/count';
import {count} from 'plexis';
```
