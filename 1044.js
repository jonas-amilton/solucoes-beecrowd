let [n1, n2] = lines
  .shift()
  .split(" ")
  .map((n) => Number(n));


if(n2 % n1 === 0 || n1 % n2 === 0){
    console.log('Sao Multiplos');
}else{
    console.log('Nao sao Multiplos');
}