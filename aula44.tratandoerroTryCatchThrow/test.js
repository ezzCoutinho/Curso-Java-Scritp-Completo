const s = (x,y) => {
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('Oooops!');
    }

    return x + y;
}

try{
    console.log(s(1, 'oi'));
} catch (e) {
    console.log('Ooops! número inválido.');
}

