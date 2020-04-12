function square(x) {
  return x * x;
}

// wtf?
function square2(x) {
  return math_exp(double(math_log(x)));
}

function double(x) {
  return x + x;
}


/**
 * sqrt related functions
 * @param {*} guess 
 * @param {*} x 
 */
function sqrt(x) {
  function sqrt_iter(guess, x) {
    return good_enough(guess, x)
          ? guess
          : sqrt_iter(improve(guess, x), x);
  }
  
  function good_enough(guess, x) {
    return Math.abs(square(guess) - x) < 0.001;
  }

  function improve(guess, x) {
    return average(guess, x/guess);
  }
  
  function average(a, b) {
    return (a + b)/2;
  }

  return sqrt_iter(1.0, x);
}

