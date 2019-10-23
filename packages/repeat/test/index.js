import repeat from '../src';

describe('repeat', () => {
  it('repeats text with repeat param and default glue', () => {
    const result = repeat('ABCD');
    expect(result).toBe('ABCD');
  });

  it('repeats text with repeat param and default glue', () => {
    const result = repeat('Apollo11', 2);
    expect(result).toBe('Apollo11Apollo11');
  });

  it('repeats text with repeat param and glue', () => {
    const result = repeat('x', 2, '+');
    expect(result).toBe('x+x');
  });

  it('repeats text with repeat param and glue', () => {
    const result = repeat('xx', 2, '_');
    expect(result).toBe('xx_xx');
  });
});
