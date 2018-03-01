// 657. Judge Route Circle
// 判断moves 里面U和D ,L和R是否数量相等
var judgeCircle = function(moves) {
  var arr = moves.split('')
  var count = function(arr, char) {
    return arr.reduce((total, item) => total + ( char === item ), 0)
  }
  return count(arr,'U') === count(arr, 'D') && count(arr,'L') === count(arr, 'R')
}