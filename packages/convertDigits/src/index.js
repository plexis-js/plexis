/**
 * @description Converts English/Persian/Arabic digits to one another.
 * @param {String} s
 * @returns {String} given string with persian form of numbers
 * @example
 * digitConversionE2P('1234') // returns '۱۲۳۴'
 */

const digitConversionE2P = s => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
const digitConversionE2A = s => s.replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);

const digitConversionP2E = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
const digitConversionA2E = s => s.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));

const digitConversionP2A = s => s.replace(/[۰-۹]/g, d => '٠١٢٣٤٥٦٧٨٩'['۰۱۲۳۴۵۶۷۸۹'.indexOf(d)]);
const digitConversionA2P = s => s.replace(/[٠-٩]/g, d => '۰۱۲۳۴۵۶۷۸۹'['٠١٢٣٤٥٦٧٨٩'.indexOf(d)]);

export {
  digitConversionE2P,
  digitConversionE2A,
  digitConversionP2E,
  digitConversionA2E,
  digitConversionP2A,
  digitConversionA2P
};
// export {digitConversionE2P, digitConversionE2A, };
