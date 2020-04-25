const promise = new Promise((resolve, reject) => {
  const condition = 6 * 0;
  if (condition) {
    reject({ cow: 'moo' });
  } else {
    resolve({ cow: 'MOO' });
  }
});
promise
  .then(res => console.log(res.cow))
  .catch(err => console.log(err.cow));
console.log('Cows go: ');

// What is the result?
// moo
// Cows go:
// Cows go:
// MOO
// Cows go:
// moo
// MOO
