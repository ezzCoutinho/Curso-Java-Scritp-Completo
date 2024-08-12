const f = (x) => {
    if (typeof x !== 'number'){ // checando se é numero
        return `número inválido`;
    } else if (x % 3 ===0) {
        return `${x}, divisível por três`;
    } else {
        return `This number`;
    }
}


console.log(f(30));