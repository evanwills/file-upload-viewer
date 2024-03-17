

/**
 * Make the first alphabetical character in a string upper case.
 *
 * @param {string} _whole whole regular expression match
 * @param {string} pre    preceeding non-alpha characters
 * @param {string} first  first alpha character
 *
 * @returns {string} with the first alphabetical character converted
 *                   to uppercase
 */
const ucFirstInner = (
  _whole : string ,
  pre : string,
  first: string,
) : string  => (pre + first.toUpperCase());

/**
 * Make the first alphabetical character in a string uppercase.
 *
 * @param {string} input String to be modified
 *
 * @returns {string} string with first alphabetical character
 *                   uppercased.
 */
export const ucFirst = (input : string) : string => input
  .trim()
  .replace(/([^a-z]*)([a-z])/i, ucFirstInner);
