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