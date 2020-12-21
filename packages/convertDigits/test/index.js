import {
  digitConversionE2P,
  digitConversionE2A,
  digitConversionA2E,
  digitConversionA2P,
  digitConversionP2A,
  digitConversionP2E
} from '../src';

it('convert English to Persian', () => {
  expect(digitConversionE2P('1234567890')).toBe('۱۲۳۴۵۶۷۸۹۰');
});

it('convert English to Arabic', () => {
  expect(digitConversionE2A('1234567890')).toBe('١٢٣٤٥٦٧٨٩٠');
});

it('convert Persian to English', () => {
  expect(digitConversionP2E('۱۲۳۴۵۶۷۸۹۰')).toBe('1234567890');
});

it('convert Persian to Arabic', () => {
  expect(digitConversionP2A('۱۲۳۴۵۶۷۸۹۰')).toBe('١٢٣٤٥٦٧٨٩٠');
});

it('convert Arabic to English', () => {
  expect(digitConversionA2E('١٢٣٤٥٦٧٨٩٠')).toBe('1234567890');
});

it('convert Arabic to Persian', () => {
  expect(digitConversionA2P('١٢٣٤٥٦٧٨٩٠')).toBe('۱۲۳۴۵۶۷۸۹۰');
});
