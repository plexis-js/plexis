import withoutHTML from '../src';

it('removes <b> tags from HTML', () => {
  expect(withoutHTML('<b>Testing</b>')).toBe('Testing');
});

it('removes multiple tags from HTML', () => {
  expect(withoutHTML('<b><i>Testing</i></b>')).toBe('Testing');
});

it('removes tags from a HTML table', () => {
  expect(withoutHTML('<table><tr><td>Testing</td></tr></table>')).toBe('Testing');
});
