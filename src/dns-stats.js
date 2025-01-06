const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dnsCounts = {};
  domains.map(fullDomain => {
    let reversedParts = fullDomain.split('.').reverse();
    console.log(reversedParts);
    let currentDNS = '';
    reversedParts.map(part => {
      currentDNS += '.' + part;
      if (!dnsCounts[currentDNS]) dnsCounts[currentDNS] = 1;
      else dnsCounts[currentDNS] = dnsCounts[currentDNS] + 1;
    });
  });
  return dnsCounts;
}

module.exports = {
  getDNSStats
};
