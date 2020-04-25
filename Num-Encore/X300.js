console.log(isNaN('2')) // t / t / t // f
console.log(isNaN(3)) // f / f / f // f
console.log(isNaN(true)) // t / f / t // f M
console.log(isNaN('one')) // t / t / t // t
console.log(isNaN([2])) // f / f / t // f -C
console.log(isNaN({ moo: 2 })) // t / t / t // t
console.log(Number.isNaN('10')) // t / t / t // t
console.log(Number.isNaN(000)) // f / f / f // f
console.log(isNaN(undefined)) // t / t / t // t
console.log(isNaN((24 % 2 === 1) + 2)) // f / t / f // f -M

// Which of these is true?
// Who ever gets the most right wins? Tiebreaker is by buzz time.
