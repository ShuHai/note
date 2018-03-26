// 费波那契数列（意大利语：Successione di Fibonacci），又译为费波拿契数、斐波那契数列、费氏数列、黄金分割数列。

// 在数学上，费波那契数列是以递归的方法来定义：

// F_{0}=0
// F_{1}=1
// F_{n}=F_{{n-1}}+F_{{n-2}}（n≧2）
// 非尾递归
function fibonacci(n) {
  return n > 1 ? fibonacci(n - 1) + fibonacci(n - 2) : n
}
