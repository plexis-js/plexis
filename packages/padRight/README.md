# `@plexis/padRight`

Pads the string with another string until the resulting string reaches the given length.
The padding is applied in the end of the string.

## Usage

```
const padRight = require('@plexis/pad-right');

padRight('Foo Bar', 10, '*'); // 'Foo Bar***'
padRight('Foo Bar', 10, '123'); // 'Foo Bar123'
```
