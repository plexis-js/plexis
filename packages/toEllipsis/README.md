# `@plexis/to-ellipsis`

Truncates the input text to the desired length.

**Installation**
`npm i @plexis/to-ellipsis`

**Usage**

````javascript
import toChunks from '@plexis/to-ellipsis';


toEllipsis('foo');
// => 'foo'
toEllipsis('foo', 1);
// =>  'f..'
toEllipsis('foo', 3);
// => 'foo'
toEllipsis('Last night I dreamt I went to Manderley again.', 5); ;
// => 'Last ...'


**Aliases**

```javascript
import toEllipsis from '@plexis/to-ellipsis';
import {toEllipsis, truncate, fit} from 'plexis';
````
