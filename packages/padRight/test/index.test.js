import padRight from '../src';

describe('padRight', () => {
  it('should return provided string when pad length is less or equal to the string length', () => {
    expect(padRight('Foo Bar', 1)).toEqual('Foo Bar');
    expect(padRight('Foo Bar', 7)).toEqual('Foo Bar');
  });

  it('should return right padded string with one default delimiter', () => {
    expect(padRight('Foo Bar', 8)).toEqual('Foo Bar ');
  });

  it('should return right padded string with *', () => {
    expect(padRight('Foo Bar', 8, '*')).toEqual('Foo Bar*');
  });

  it('should return right padded string with ***', () => {
    expect(padRight('Foo Bar', 10, '*')).toEqual('Foo Bar***');
  });

  it('should return right padded string with 123', () => {
    expect(padRight('Foo Bar', 10, '123')).toEqual('Foo Bar123');
  });

  it('should return right padded string with 12', () => {
    expect(padRight('Foo Bar', 9, '123')).toEqual('Foo Bar12');
  });

  it('should return right padded string with 1231', () => {
    expect(padRight('Foo Bar', 11, '123')).toEqual('Foo Bar1231');
  });

  it('should return right padded string with 12312', () => {
    expect(padRight('Foo Bar', 12, '123')).toEqual('Foo Bar12312');
  });
});
