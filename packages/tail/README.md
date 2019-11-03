## `head`

Extracts the last length characters from the input text

`npm i @plexis/tail`

**Usage**

```javascript
import tail from '@plexis/tail';
tail(); // => ''
tail('Hello'); // => 'o'
tail('Hello', 2); // => 'lo'
tail('Hello', 100); // => 'Hello'
```

**Aliases**

```javascript
import {tail} from 'plexis';
import {rest} from 'plexis';
import {last} from 'plexis';
import {pop} from 'plexis';
```
