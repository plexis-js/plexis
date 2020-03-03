'use strict';

import toEllipsis from '../src';

describe('@plexis/toEllipsis', () => {
  it('should retrun ...', () => {
    expect(toEllipsis('foo', 0)).toBe('...');
  });
  it('should retrun foo', () => {
    expect(toEllipsis('foo')).toBe('foo');
  });
  it('should retrun foo', () => {
    expect(toEllipsis('foo', Infinity)).toBe('foo');
  });
  it('should retrun foo', () => {
    expect(toEllipsis('foo', 3)).toBe('foo');
  });
  it('should retrun Last ...', () => {
    expect(toEllipsis('Last night I dreamt I went to Manderley again.', 5)).toBe('Last ...');
  });
});
