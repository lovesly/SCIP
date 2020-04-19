// Fibnacci
// recursive process
function fib_recursive(n) {
  return n === 0
        ? 0
        : n === 1
          ? 1
          : fib_recursive(n - 1) + fib_recursive(n - 2);
}

// iterative process
// a <- a + b
// b <- a

function fib(n) {
  return fib_iter(1, 0, n);
}

// wow, smart
function fib_iter(a, b, counter) {
  return counter === 0
        ? b
        : fib_iter(a + b, a, counter - 1);
}

// ======================= //
// coins of change
function count_change(amount) {
  return cc(amount, 5);
}

function cc(amount, kinds_of_coin) {
  return amount === 0
        ? 1
        : amount < 0 || kinds_of_coin === 0
          ? 0
          : cc(amount, kinds_of_coin - 1)
            + 
            cc(amount - first_denomination(kinds_of_coin), kinds_of_coin)
}

// interesting
function first_denomination(kinds_of_coins) {
  return kinds_of_coins === 1 ? 1 :
        kinds_of_coins === 2 ? 5 :
        kinds_of_coins === 3 ? 10 :
        kinds_of_coins === 4 ? 25 :
        kinds_of_coins === 5 ? 50 : 0;
}