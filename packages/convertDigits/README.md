## `@plexis/convert-digits`

Converts English digits (1,2,3...) and Persian numbers (۱، ۲، ۳، ۴، ۵، ۶، ۷، ۸، ۹) and Arabic numbers (٠,١,٢,٣,٤,٥,٦,٧,٨,٩) to one another.

`npm i @plexis/count`

**Usage**

```javascript
import digitConversionE2P from '@plexis/convert-digits';
import digitConversionE2A from '@plexis/convert-digits';

let persianNumbers = digitConversionE2P('1234567'); // returns '۱۲۳۴۵۶۷'
let arabicNumbers = digitConversionE2A('1234567'); // returns '۱۲۳٤۵٦۷'
```

**Aliases**

```javascript
import digitConversionE2P from '@plexis/convert-digits';
import {digitConversionE2P} from 'plexis';
```
