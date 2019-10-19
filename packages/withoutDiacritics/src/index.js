/**
 * @description Cleanups a string from diacritics.
 * @param {String} text
 * @example
 * withoutDiacritics('áéíóú') // returns 'aeiou'
 */
const withoutDiacritics = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export default withoutDiacritics;
