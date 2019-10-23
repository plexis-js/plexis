## `distance`

Calculates the [Levenshtein Distance](https://en.wikipedia.org/wiki/Levenshtein_distance) between two strings.

`npm i @plexis/distance`

**Usage**

```javascript
import distance from '@plexis/distance';
distance('book', 'back'); // returns 2
distance('black', 'back'); // returns 1
distance('Foo', 'Bar'); // returns 3
```

**Aliases**

```javascript
import distance from '@plexis/distance';
import {distance, calcLevenshtein, levenshtein} from 'plexis';
```
