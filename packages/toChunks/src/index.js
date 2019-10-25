/**
 * @description Converts a string to its equivalent predecessor
 * @param {String} text The input String
 * @param {Integer} chunkSize The size of each chunk, default to 1
 * @example
 * toChunks('Hello world'); // => ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
 * toChunks('   '); // => [' ', ' ', ' ']
 * toChunks('1234567', 2); // => ['12', '34', '56', '7']
 * toChunks('1234567', 6) // => ['123456', '7']
 */
const toChunks = (text, chunkSize = 1) => text.match(new RegExp(`.{1,${chunkSize}}`, 'g'));

export default toChunks;
