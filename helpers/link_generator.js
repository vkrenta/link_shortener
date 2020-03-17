/**
 * @param {String} old
 */
module.exports = old => {
  const length = old.length;
  const res = old.split('');
  const alphabet =
    '012345679qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  let j = 1;
  for (; j <= length; j++) {
    const i = alphabet.indexOf(old[length - j]);
    if (i + 1 === alphabet.length) res[length - j] = alphabet[0];
    else {
      res[length - j] = alphabet[i + 1];
      break;
    }
  }

  if (j > length) return alphabet[0] + res.join('');

  return res.join('');
};
