var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

calcMedia(A, B, C);

function calcMedia(A, B, C){
    let media = (2 * A + 3 * B + 5 * C) / 10;
    console.log("MEDIA = " + media.toFixed(1));    
}