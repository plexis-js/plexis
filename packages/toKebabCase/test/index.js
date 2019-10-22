import toKebabCase from '../src';
import {dasherize, slugify} from '../../plexis/src';

describe('to-kebab-case', () => {
  it('convert to loweCase', () => {
    expect(toKebabCase('Cool')).toBe('cool');
  });

  it('replace spaces with dash', () => {
    expect(toKebabCase('Hey how are you today')).toBe('hey-how-are-you-today');
  });

  it('remove special characters', () => {
    expect(toKebabCase('*Hey how are you today?')).toBe('hey-how-are-you-today');
  });

  it('convert camel case to kebab case', () => {
    expect(toKebabCase('CamelCaseIsNotThatBad')).toBe('camel-case-is-not-that-bad');
  });

  it('is alias of dasherize', () => {
    expect(dasherize).toBe(toKebabCase);
  });

  it('is alias of slugify', () => {
    expect(slugify).toBe(toKebabCase);
  });
});
