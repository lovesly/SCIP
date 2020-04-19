function factorial(n) {
  if (n <= 1) throw new Error('Oops')
  return n === 1 ? 1 : n * factorial(n-1);
}

// 带记忆的
function factorialMem(n) {
  return fact_iter(1, 1, n);
}

// ?
function fact_iter(product, counter, max) {
  // if (counter >= max) return product;
  // return fact_iter(product * (counter + 1), counter + 1, max);
  return counter > max 
    ? product 
    : fact_iter(product * counter, counter + 1, max); 
}

console.log(factorialMem(3));

// wtf
// 有点意思，我记得课上讲过，部分机器在处理的时候，会先计算函数参数，而有些是另一种顺序？
function A(x, y) {
  return  y === 0
          ? 0
          : x === 0
            ? 2 * y
            : y === 1
              ? 2
              : A(x-1, A(x, y - 1));
}

// ============================ //
// recursive solution, what about iterative???
console.log(A(1, 5) === 32)
// A(0, A(1, 4))
// A(0, A(0, A(1, 3)))
// A(0, A(0, A(0, A(1, 2))))
// A(0, A(0, A(0, A(0, A(1, 1)))))
// A(0, A(0, A(0, A(0, 2))))
// A(0, A(0, A(0, 4)))
// A(0, A(0, 8))
// A(0, 16)
// 32

// ============================ //
console.log(A(2, 4))
// A(1, A(2, 3))
// A(1, A(1, A(2, 2)))
// A(1, A(1, A(1, A(2, 1))))
// A(1, A(1, A(1, 2)))
// A(1, A(1, 4))
// A(1, 16)
console.log(A(1, 16) === A(2, 4))

// ============================ //
console.log(A(3, 3))
