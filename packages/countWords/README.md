# `@plexis/count-words`

Returns the number of words contained in the input text.

**Installation**
`npm i @plexis/count-words`

**Usage**

```javascript
import countWords from '@plexis/count-words';

countWords(); // returns 0
countWords(''); // returns 0
countWords(' '); // returns 0
countWords('Hello   World    !!'); // returns 2
```

## Aliases

```javascript
import countWords from '@plexis/count-words';
import {countWords} from 'plexis';
```
