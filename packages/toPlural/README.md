# `@plexis/to-plural`

Converts a word to its plural form

## Installation

`npm i @plexis/to-plural`

## Usage

```javascript
import toPlural from '@plexis/to-plural';

toPlural('example'); // => 'examples'
toPlural('example', 10); // => 'examples'
toPlural('example', 1); // => 'example'
toPlural('example', 'examplez', 10); // => 'examplez'
toPlural('example', 'examplez', 1); // => 'example'
```

## Aliases

```javascript
import toPlural from '@plexis/to-plural';
import {toPlural, pluralize} from 'plexis';
```
