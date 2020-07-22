'use strict';

import countWords from '../src';

describe('@plexis/countWords', () => {
  it('should retrun 0', () => {
    expect(countWords()).toBe(0);
  });
  it('should retrun 0', () => {
    expect(countWords('  ')).toBe(0);
  });
  it('should retrun 2', () => {
    expect(countWords('Hello   World')).toBe(2);
  });
  it('should retrun 2', () => {
    expect(countWords('Hello   World    !!')).toBe(2);
  });
  it('should retrun 3', () => {
    expect(countWords('Hello   Another  Dimension    !!')).toBe(3);
  });
  it('should retrun 3', () => {
    expect(countWords('Hello  Another  Dimension ,.!?;:+-`@#$%^&*()')).toBe(3);
  });
});
