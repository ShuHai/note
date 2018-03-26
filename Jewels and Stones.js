 // 771. Jewels and Stones
// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// 判断S中有多少个字符在J之中
// J.indexOf(item) !== -1  等价于 J.includes(item),但是
var numJewelsInStones = function(J, S) {
  let count = 0
  S.split('').forEach(item => {
    if(J.indexOf(item) !== -1 ) {
      count += 1
    }
  })
  return count
};


// 最简,性能速度赶不上上面的答案
var numJewelsInStonesAns = function(J, S) {
  const jewels = new Set(J)
  return S.split('').reduce((res, s) => res + jewels.has(s), 0)
};