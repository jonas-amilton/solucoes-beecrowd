var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

N = parseInt(lines.shift());

for (i = 2; i <= N; i += 2) {
  if (i % 2 === 0) {
    console.log(`${i}^2 = ${i * i}`);    
  }
}