import escapeHTML from '../src';

it('converts HTML special characters in a string to entity equivalents', () => {
  expect(escapeHTML('ABCD')).toBe('ABCD');
  expect(escapeHTML('<3')).toBe('&lt;3');
  expect(escapeHTML('<p>This is cool</p>')).toBe('&lt;p&gt;This is cool&lt;/p&gt;');
  expect(escapeHTML('<div>"Rise" & \'Shine\'</div>')).toBe(
    '&lt;div&gt;&quot;Rise&quot; &amp; &#039;Shine&#039;&lt;/div&gt;'
  );
});
