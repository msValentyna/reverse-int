module.exports = function reverse (n) {
  let result = String(Math.abs(n)).replace(/0$/, '').split('').reverse().join('');
  return result;
}


