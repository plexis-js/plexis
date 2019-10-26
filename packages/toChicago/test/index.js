import toChicago from '../src';

it('transform normal string', () => {
  expect(toChicago('This is a title')).toBe('This Is a Title');
});

it('transform mixed sentence', () => {
  expect(toChicago('in Turabian shows a sample title page for a class paper.')).toBe(
    'In Turabian Shows a Sample Title Page for a Class Paper.'
  );
});

it('transform edge case', () => {
  expect(toChicago('camelCase PascalCase snake_case and kebab-case')).toBe(
    'Camelcase Pascalcase Snake_case and Kebab-Case'
  );
});
