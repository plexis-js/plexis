import toChicago from '../src';

describe('toChicago', () => {
  it('transforms normal string', () => {
    expect(toChicago('This is a title')).toBe('This Is a Title');
  });

  it('transforms mixed sentence', () => {
    expect(toChicago('in Turabian shows a sample title page for a class paper.')).toBe(
      'In Turabian Shows a Sample Title Page for a Class Paper.'
    );
  });

  it('transforms edge case', () => {
    expect(toChicago('camelCase PascalCase snake_case and kebab-case')).toBe(
      'Camelcase Pascalcase Snake_case and Kebab-Case'
    );
  });
});
