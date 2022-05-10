function countUpToN(n) {
  console.log(`starting countUpToN(${n})`);
  for (let i = 0; i < n ; i++) {
    console.log(i);
  }
  console.log("ending countUpToN()");
}

// MAIN
console.log("hello world");
countUpToN(3);
console.log("bye!");