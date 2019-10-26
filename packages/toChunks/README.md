# `@plexis/to-chunks`

Splits the input text into an array of chunks.

**Installation**
`npm i @plexis/to-chunks`

**Usage**

```javascript
import toChunks from '@plexis/to-chunks';

toChunks('Hello world');
// => ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

toChunks('   ');
// => [' ', ' ', ' ']

toChunks('1234567', 2);
// => ['12', '34', '56', '7']

toChunks('1234567', 6);
// => ['123456', '7']
```

**Aliases**

```javascript
import toChunks from '@plexis/to-chunks';
import {toChunks, chop} from 'plexis';
```
