## `compare`

Compares input text as humans do.

`npm i @plexis/compare`

**Usage**

```javascript
import naturalCompare from '@plexis/compare';

compare('A', 'b'); // returns 1
compare('A woman', 'a woman'); // returns 1
compare('b', 'B'); // returns -1
```

**Aliases**

```javascript
import compare from '@plexis/compare';
import {compare, compareLikeHuman, naturalCompare} from 'plexis';
```
