# `@plexis/to-ellipsis`

Truncates the input text to the desired length.

**Installation**
`npm i @plexis/to-ellipsis`

**Usage**

```javascript
import toEllipsis from '@plexis/to-ellipsis';

toEllipsis('foo'); // retruns 'foo'
toEllipsis('foo', 1); // retruns  'f..'
toEllipsis('foo', 3); // retruns 'foo'
toEllipsis('Last night I dreamt I went to Manderley again.', 5); // retruns 'Last ...'
```

## Aliases

```javascript
import toEllipsis from '@plexis/to-ellipsis';
import {toEllipsis, truncate, fit} from 'plexis';
```
