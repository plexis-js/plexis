const formatWord = word =>
  word
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.toLowerCase().substring(1))
    .join('-');

// Prepositions list
const wordException = [
  'a',
  'an',
  'the',
  'and',
  'or',
  'aboard',
  'about',
  'above',
  'across',
  'after',
  'against',
  'along',
  'amid',
  'among',
  'around',
  'as',
  'at',
  'before',
  'behind',
  'below',
  'beneath',
  'beside',
  'between',
  'beyond',
  'but',
  'by',
  'concerning',
  'considering',
  'despite',
  'down',
  'during',
  'except',
  'following',
  'for',
  'from',
  'in',
  'inside',
  'into',
  'like',
  'minus',
  'near',
  'next',
  'of',
  'off',
  'on',
  'onto',
  'opposite',
  'out',
  'outside',
  'over',
  'past',
  'per',
  'plus',
  'regarding',
  'round',
  'save',
  'since',
  'than',
  'through',
  'to',
  'toward',
  'under',
  'underneath',
  'unlike',
  'until',
  'up',
  'upon',
  'versus',
  'via',
  'with',
  'within',
  'without'
];

const formatSentence = sentence =>
  sentence
    .trim()
    .split(/\s+/)
    .map((word, index) =>
      index > 0 && wordException.includes(word.toLowerCase())
        ? word.toLowerCase()
        : formatWord(word)
    )
    .join(' ');

/**
 * @description Convert text into Chicago style
 * @param {String} text The text to transform
 * @returns {String} Returns text transformed according to the The Chicago Manual of Style.
 * @example
 * toChicago('This is a title'); // returns 'This Is a Title'
 * toChicago('in Turabian shows a sample title page for a class paper.'); // returns 'In Turabian Shows a Sample Title Page for a Class Paper.'
 * toChicago('camelCase PascalCase snake_case and kebab-case'); // returns 'Camelcase Pascalcase Snake_case and Kebab-Case'
 
 */
const toChicago = text =>
  Array.from(
    text
      .replace(/\s+/, ' ')
      .replace(/\s+([.?!,:;])\s*/, '$1 ')
      .concat('.')
      .matchAll(/(.*?)([.?!])/g),
    x => formatSentence(x[1]) + x[2]
  )
    .join(' ')
    .slice(0, -1)
    .trimRight();

export default toChicago;
