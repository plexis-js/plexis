import toTitle from '../src';

it('converts a sigle word sentence to a title', () => {
  expect(toTitle('this')).toBe('This');
});

it('converts a multiword sentence to a title', () => {
  expect(toTitle('this is cool mate')).toBe('This Is Cool Mate');
});

it('converts a multiword sentence to a title for any given language', () => {
  // lipsum.com
  // Greek
  expect(
    toTitle(
      'Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους επαγγελματίες της τυπογραφίας και στοιχειοθεσίας.'
    )
  ).toBe(
    'Το Lorem Ipsum Είναι Απλά Ένα Κείμενο Χωρίς Νόημα Για Τους Επαγγελματίες Της Τυπογραφίας Και Στοιχειοθεσίας.'
  );

  // French
  expect(toTitle("Est qu'il possède une distribution de l'imprimerie depuis")).toBe(
    "Est Qu'il Possède Une Distribution De L'imprimerie Depuis"
  );

  // Spanish
  expect(toTitle('el texto de relleno estándar de las industrias desde el año 1500')).toBe(
    'El Texto De Relleno Estándar De Las Industrias Desde El Año 1500'
  );
});
