import when from '../src';

it('executes the function if the condition is a boolean and true', () => {
  const mock = jest.fn();
  when(true, mock)(1);
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith(1);
});

it("doesn't execute the function if the condition is a boolean and false", () => {
  const mock = jest.fn();
  when(false, mock)(1);
  expect(mock).toHaveBeenCalledTimes(0);
});

it('executes the function if the condition is a function and evaluates to true', () => {
  const mock = jest.fn();
  when(x => x > 0, mock)(1);
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith(1);
});

it("doesn't execute the function if the condition is a function and evaluates to false", () => {
  const mock = jest.fn();
  when(x => x > 0, mock)(-1);
  expect(mock).toHaveBeenCalledTimes(0);
});
