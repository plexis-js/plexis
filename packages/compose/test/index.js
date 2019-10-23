import compose from '../src';

const inc = x => x + 1;
const add = (x, y) => x + y;

describe('compose', () => {
  it('composes 2 unary functions', () => {
    const ops = compose(
      inc,
      x => add(x, 2)
    );
    expect(ops(1)).toBe(4);
    expect(ops(10)).toBe(13);
  });

  it('composes unary and binary functions', () => {
    const ops = compose(
      inc,
      add
    );
    expect(ops(2, 3)).toBe(6);
    expect(ops(-1, 10)).toBe(10);
  });

  it('composes 3 functions', () => {
    const ops = compose(
      inc,
      inc,
      x => add(x, 12)
    );
    expect(ops(2)).toBe(16);
    expect(ops(10)).toBe(24);
  });
});
