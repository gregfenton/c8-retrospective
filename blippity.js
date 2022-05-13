function countUpToN(n) {
  console.log(`starting countUpToN(${n})`);
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('ending countUpToN()');
}


module.exports = {countUpToN};

console.log("INSIDE COUNT UP TO N:", 55 + 99);