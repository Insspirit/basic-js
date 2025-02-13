const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 1;
  for (let i = 0; i < str.length; i += 1) {
    console.log(str[i])
    if (str[i] === str[i + 1]) count += 1;
    else {
      res += (count > 1) ? count + str[i] : str[i];
      count = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
