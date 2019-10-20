# `@plexis/toLower`

Lowercase the first letter of the given string.

**Installation**
`npm i @plexis/to-lower`

**Usage**

```javascript
import toLower from '@plexis/to-lower';

toLower('Foo Bar', false); // returns 'foo Bar'
toLower('Foo Bar', true); // returns 'foo bar'
toLower('FOO BAR', false); // returns 'fOO BAR'
```

**Aliases**

```javascript
import {toLower} from 'plexis';
import {toFirstLower} from 'plexis';
import {decapitalize} from 'plexis';
```
