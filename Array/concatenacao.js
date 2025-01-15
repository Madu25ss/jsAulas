//concatenação de array
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = a.concat(b);
//const c = a.concat(b, [a, b, c], 'exemplo'); -> junta tudo em um array só
//...rest -> ...spread = faz o mesmo que o concat()
const d = [...a, ...b, ...[7, 8, 9]];

console.log(c);
console.log(d);