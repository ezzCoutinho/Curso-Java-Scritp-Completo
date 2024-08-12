const axios = require('axios');

async function executaAsync() {
    try {
        const c1 = await axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                response.data.forEach(post => {
                    console.log("Just name:", post.name);
                });
            })
        const c2 = await axios.post('https://jsonplaceholder.typicode.com/users', {
            user: 'John Doe',
            email: 'johndoe@example.com',
            id: 11
        })
            .then(response => {
                console.log('User and email create, sucess', response.data);

            })
        const c3 = await axios.put('https://jsonplaceholder.typicode.com/users/1', {
            name: 'Jane Doe'
        })
        .then(response => {
            console.log('name has been atualization', response.data);
        })
        const c4 = await axios.delete('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            console.log('user has been delete...', response.data);
        })
    } catch (error) {
        console.log(error);
    }
}

executaAsync();




// // Como você faria uma requisição GET para obter todos os usuários do JSONPlaceholder e exibir o nome de cada usuário no console?
// axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//         response.data.forEach(post => {
//             console.log("Just name:", post.name);
//         });
//     })
//     .catch(reject => {
//         console.error('Error:', reject);
//     })
// // Como você faria uma requisição POST para criar um novo usuário com o nome "John Doe" e o email "johndoe@example.com"?
// axios.post('https://jsonplaceholder.typicode.com/users', {
//     user: 'John Doe',
//     email: 'johndoe@example.com',
//     id: 11
// })
//     .then(response => {
//         console.log('User and email create, sucess', response.data);
//     })
//     .catch(reject => {
//         console.error('Nada foi criado', reject);
//     })


// // Como você faria uma requisição PUT para atualizar o nome do usuário com o ID 1 para "Jane Doe"?

// axios.put('https://jsonplaceholder.typicode.com/users/1', {
//     name: 'Jane Doe'
// })
// .then(response => {
//     console.log('name has been atualization', response.data);
// })
// .catch(reject => {
//     console.error('The atualization is failed', reject);
// })

// // Como você faria uma requisição DELETE para excluir o usuário com o ID 1?

// axios.delete('https://jsonplaceholder.typicode.com/users/1')
// .then(response => {
//     console.log('user has been delete...', response.data);
// })
// .catch(reject => {
//     console.error('Failed', reject);
// })