this.cow = 'moo'

const callCow = () => {
  var cow = 'bark'
  console.log(this.cow);
}

function callCow2 () {
  this.cow = 'bark'
  var cow = 'bark'
  console.log(this.cow);
}

callCow(); // moo // bark // 
callCow2(); // bark // moo // 
// What is the result?
