## `@plexis/compose`

A proper description

`npm i @plexis/compose`

**Usage**

```javascript
import toChicago from '@plexis/to-chicago';

toChicago('This is a title'); // returns 'This Is a Title'
toChicago('in Turabian shows a sample title page for a class paper.'); // returns 'In Turabian Shows a Sample Title Page for a Class Paper.'
toChicago('camelCase PascalCase snake_case and kebab-case'); // returns 'Camelcase Pascalcase Snake_case and Kebab-Case'
```

**Aliases**

```javascript
import toChicago from '@plexis/to-chicago';
import {toTurabian, toChicagoManualStyle, toChicagoStyle, toChicagoTitle} from 'plexis';
```
