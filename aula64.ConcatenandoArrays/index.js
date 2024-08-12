// .concat() -> é usado para concatenar dois ou mais arrays

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [7, 8, 9];
const a4 = a1.concat(a2, a3, [10, 11, 12], 'Luiz', 14,15,16,17,18,19,20);


// spread também faz a concateção.
const a5 = [...a1, ...a2, 'Luiz', ...a3, ...[10, 11, 12]];

console.log(a5);