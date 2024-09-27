module.exports = function reverse(n) {
  let revArray = [];
  let i = Math.abs(n);
  while (i > 0) {
    let k = i % 10;
    revArray.push(k);
    i = Math.trunc(i / 10);
  }
  let newNum = parseInt(revArray.join(''), 10);
  console.log(newNum);
  return (newNum);
}
