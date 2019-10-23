# `@plexis/compose`

Compose 2 or more functions.

**Installation**
`npm i @plexis/compose`

**Usage**

```javascript
import compose from '@plexis/compose';
const inc = x => x + 1;
const add = (x, y) => x + y;
const ops = compose(
  inc,
  x => add(x, 2)
);

ops(1); // returns 4;
ops(10); // returns 13;
```

**Aliases**

```javascript
import compose from '@plexis/compose';
import {compose, _do} from 'plexis';
```
