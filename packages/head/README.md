## `head`

Extracts the first length characters from the input text.

`npm i @plexis/head`

**Usage**

```javascript
import head from '@plexis/head';

head(); // => ''
head('Hello'); // => 'H'
head('Hello', 2); // => 'He'
head('Hello', 100); // => 'Hello'
```

**Aliases**

```javascript
import {head} from 'plexis';
import {first} from 'plexis';
import {popFirst} from 'plexis';
```
