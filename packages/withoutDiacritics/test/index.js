import withoutDiacritics from '../src';

it('removes any diacritics for Galician', () => {
  expect(withoutDiacritics('áéíóú')).toBe('aeiou');
});

it('removes any diacritics for Greek', () => {
  expect(withoutDiacritics('Άά Έέ Ήή Ίί Όό Ύύ Ώώ ΐ ΰ Ϊϊ Ϋϋ')).toBe(
    'Αα Εε Ηη Ιι Οο Υυ Ωω ι υ Ιι Υυ'
  );
});

it('removes any diacritics for Latvian', () => {
  expect(withoutDiacritics('āēīūčģķļņšž')).toBe('aeiucgklnsz');
});

it('removes any diacritics for Czech', () => {
  expect(withoutDiacritics('č ď ě ň ř š ť ž')).toBe('c d e n r s t z');
});
