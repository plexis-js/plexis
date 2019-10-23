# `@plexis/repeat`

Repeats the input text number of times.

**Installation**
`npm i @plexis/repeat`

**Usage**

```javascript
import repeat from '@plexis/repeat';

repeat('ABCD');
// => true

repeat('Apollo11', 2);
// => 'Apollo11Apollo11'

repeat('x', 2);
// => 'xx'

repeat('x', 2, '+');
// => 'x+x'

repeat('xx', 2, '_');
// => 'xx_xx'
```

**Aliases**

```javascript
import repeat from '@plexis/repeat';
import {repeat, multiply} from 'plexis';
```
