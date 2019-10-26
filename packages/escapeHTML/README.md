# `@plexis/escapeHTML`

Takes the input text and converts HTML special characters to their entity equivalents.

**Installation**
`npm i @plexis/escape-html`

**Usage**

```javascript
import escapeHTML from '@plexis/escape-html';

escapeHTML('ABCD'); // returns 'ABCD'
escapeHtml('<3'); // returns '&lt;3'
escapeHtml('<p>This is cool</p>'); // returns '&lt;p&gt;This is cool&lt;/p&gt;'
```

**Aliases**

```javascript
import {escapeHTML} from 'plexis';
```
