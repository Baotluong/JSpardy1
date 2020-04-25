const arr = ['Bao', 'Camille', 'Graham', "Matt"];

const meeps = arr.map((name, index) => {
  return ({
    name: name,
    rank: index,
  })
});

meeps.forEach(meeple => {
  console.log(`${meeple.name} is the #${meeple.rank} bestest Meeple in the whole world! 🙌`)
});

// What is the result?
