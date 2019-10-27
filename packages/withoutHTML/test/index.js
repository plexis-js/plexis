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

it('removes tags from a HTML div (with class)', () => {
  expect(withoutHTML('<div class="someclass">Testing</div>')).toBe('Testing');
});

it('removes tags from a HTML a tag (with href)', () => {
  expect(withoutHTML('<a href="http://example.com">Testing</a>')).toBe('Testing');
});

it('removes tags from a HTML button', () => {
  expect(withoutHTML('<button>Testing</button>')).toBe('Testing');
});

it('removes tags from a HTML input (type button)', () => {
  expect(withoutHTML('<input type="button">Testing</input>')).toBe('Testing');
});
