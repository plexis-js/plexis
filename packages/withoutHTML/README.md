# `@plexis/withoutHTML`

Removes HTML tags from the input text.

**Installation**
`npm i @plexis/without-html`

**Usage**

```javascript
import withoutHTML from '@plexis/without-html';

withoutHTML('Hello world'); // => 'Hello world'
withoutHTML('<p>Hello</p> world'); // => ' world'
withoutHTML('<p Hello world'); // => '<p Hello world'
withoutHTML('<p id="">Hello world</p>'); // => ''
withoutHTML('<p id="" Hello world</p> <b></b> from the underground'); // => ' from the underground'
```

**Aliases**

```javascript
import withoutHTML from '@plexis/without-html';
import {withoutHTML, removeHTML} from 'plexis';
```
