const soma = (...args) => {
    console.log(args[1]);
    let base = 0;
    for (let numero of args) {
        base += numero;
    }
}

soma(5, 95);