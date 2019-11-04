## `@plexis/insert`

Inserts into the input text a string at specified position.

`npm i @plexis/insert`

**Usage**

```javascript
import insert from '@plexis/insert';

insert(); // returns  ''
insert('foo ba'); // returns  'foo ba'
insert('foo ba', 'r'); // returns  'foo bar'
insert('foo ba', 'r', 1); // returns  'foo bar'
insert('foo ba', 'r', 100); // returns  'foo bar'
insert('foo ba', 'r', -100); // returns  'foo bar'
insert('oo bar', 'r', 0); // returns  'foo bar'
```

**Aliases**

```javascript
import insert from '@plexis/insert';
import {insert} from 'plexis';
```
