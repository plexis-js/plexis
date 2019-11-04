# `@plexis/to-human`

Converts a string into a human readable text

## Installation

`npm i @plexis/to-human`

## Usage

```javascript
import toHuman from '@plexis/to-human';

toHuman('foo'); // => 'Foo'
toHuman('foo     bar'); // => 'Foo bar'
toHuman(' foo-bar  baz quxQuux corge_grault GarplyWaldo'); // => 'Foo bar baz qux quux corge grault garply waldo'
toHuman(' foo-bar-baz qux       quux'); // => 'Foo bar baz qux quux'
```

## Aliases

```javascript
import toHuman from '@plexis/to-human';
import {toHuman, humanize} from 'plexis';
```
