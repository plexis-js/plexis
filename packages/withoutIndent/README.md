## `withoutIndent`

Removes leading whitespaces from each line in a string

`npm i @plexis/without-indent`

**Usage**

```javascript
import withoutIndent from '@plexis/without-indent';

withoutIndent('\t\t\tHello World'); // returns 'Hello World'
withoutIndent('\n\tHello\n\tWorld'); // returns '\nHello\nWorld'
```

**Aliases**

```javascript
import {removeIndent} from 'plexis';
import {dedent} from 'plexis';
```
