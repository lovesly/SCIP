function expt(b, n) {
  return n == 0
          ? 1
          : b * expt(b, n-1);
}

// linear iteration process
function exptI(b, n) {
  return expt_iter(b, n, 1);
}

function expt_iter(b, counter, product) {
  return counter === 0
        ? product
        : expt_iter(b, counter - 1, product * b);
}

// interesting, fast expt
// 小键盘，正好配合学习一下 vim，完美
function fast_expt(b, n) {
  return n === 0
          ? 1
          : is_even(n)
            ? square(fast_expt(b, n/2))
            : b * fast_expt(b, n - 1);
}

// 关于快速，准确的计算？
// 涉及大数，性能，精度，等等， 有现成的库吗？
function is_even(n) {
  return n % 2 === 0;
}

// =================================== //
// exercise 1.16, a little bit weird
function fast_expt_iter(a, b, n) {
  return n === 0
        ? a
        : is_even(n)
          ? fast_expt_iter(a, b * b, n/2)
          : fast_expt_iter(a * b, b, n - 1);
}

function fast_exptI(b, n) {
  return fast_expt_iter(1, b, n);
}

// =================================== //
// exercise 1.17