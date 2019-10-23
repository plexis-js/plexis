## `@plexis/startsWith`

Checks whether the input text starts with the given pattern.

`npm i @plexis/starts-with`

**Usage**

```javascript
import startsWith from '@plexis/starts-with';

startsWith('This is me', 'This is'); // returns true
startsWith('This is me', 'This is', 1); // returns false
startsWith(/[@!#$]/, '@plexis is great!'); // returns true
startsWith(/[A-Z]/, '@plexis is great!'); // returns false
```
