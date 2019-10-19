<div align="center">

### API

</div>

- [toPred](#toPred)
- [toSucc](#toSucc)
- [toTitle](#toTitle)
- [withoutDiacritics](#withoutDiacritics)

### `toPred`

Converts a string to its equivalent predecessor.

**Installation**
`npm i @plexis/to-pred`

**Usage**

```javascript
import toPred from '@plexis/to-pred';

toPred('b'); // returns 'a'
toPred('B'); // returns 'A'
toPred('BCD'); // returns 'ABC'
```

**Aliases**

```javascript
import {toPred} from 'plexis';
import {toPredecessor} from 'plexis';
```

### `toSucc`

Converts a string to its equivalent successor.

**Installation**
`npm i @plexis/to-succ`

**Usage**

```javascript
import toSucc from '@plexis/to-succ';

toSucc('a'); // returns 'b'
toSucc('A'); // returns 'B'
toSucc('ABCD'); // returns 'BCDE'
```

**Aliases**

```javascript
import {toSucc} from 'plexis';
import {toSuccessor} from 'plexis';
```

### `toTitle`

Converts a string to a title, capitalizes the first letter of each word.

**Installation**
`npm i @plexis/to-title`

**Usage**

```javascript
import toTitle from '@plexis/to-title';

toTitle('this is cool mate'); // returns 'This Is Cool Mate'
```

**Aliases**

```javascript
import {toTitle} from 'plexis';
import {titleize} from 'plexis';
```

### `withoutDiacritics`

Cleanups a string from diacritics.

**Installation**
`npm i @plexis/without-diacritics`

**Usage**

```javascript
import withoutDiacritics from '@plexis/without-diacritics';

withoutDiacritics('áéíóú'); // returns 'aeiou'
```

**Aliases**

```javascript
import {withoutDiacritics} from 'plexis';
import {cleanDiacritics} from 'plexis';
import {removeDiacritics} from 'plexis';
```
