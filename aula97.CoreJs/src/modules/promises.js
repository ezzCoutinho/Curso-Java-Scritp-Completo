function promise () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('Hey, sou a promise');
            resolve();
        }, 2000)
    })
}

export default async function assinque () {
    const c1 = await promise();
    console.log('Terminou');
}