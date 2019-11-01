import withoutHTML from '../src';

it('Remove HTML tags from the input text', () => {
  expect(withoutHTML('Hello world')).toBe('Hello world');
  expect(withoutHTML('<p>Hello</p> world')).toBe(' world');
  expect(withoutHTML('<p Hello world')).toBe('<p Hello world');
  expect(withoutHTML('<p id="">Hello world</p>')).toBe('');
  expect(withoutHTML('<p id="" Hello world</p> <b></b> from the underground')).toBe(
    ' from the underground'
  );
});
