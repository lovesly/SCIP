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
