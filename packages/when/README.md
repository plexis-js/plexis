## `when`

`when` is used for checking and chaining within the composition for supercharged functions.

`npm i @plexis/when`

**Usage**

```javascript
import compose from '@plexis/compose';
import when from '@plexis/when';

const inc = x => x + 1;
const add = (x, y) => x + y;
const setToZero = () => 0;

const compose = (...fns) => x => fns.reduce((r, f) => f(r), x);
const when = (cond, f) => x => (cond(x) ? f(x) : x);

const ops = compose(
  inc,
  x => add(x, 2),
  when(num => num > 0, compose(setToZero))
);

ops(1); // returns 0
ops(100); // returns 0
ops(-100); // returns -97
```

**Aliases**

```javascript
import when from '@plexis/when';
import {when} from 'plexis';
```
