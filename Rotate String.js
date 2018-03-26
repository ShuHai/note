// 796. Rotate String
var rotateString = function(A, B) {
  return (A + A).indexOf(B) !== -1;
};