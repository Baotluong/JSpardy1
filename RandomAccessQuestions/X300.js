const func = (n) => {
  return n > 1 ? n * func(n-1) : n;
};

console.log(func(5));

// What's the result? Don't need the actual number.

// 1 1 2 3 5 8
// 5 * 4 * 3 * 2 * 1 *  4 * 3 * 2 * 1  * etc....
// 20

// 5 * 4 * 3 * 2 * 1 !5