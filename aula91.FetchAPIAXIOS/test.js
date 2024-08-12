// importando axios do node.modules
const axios = require('axios');

// pegando apenas os id do post
axios.get('https://jsonplaceholder.typicode.com/pots')
.then(response => {
    response.data.forEach(post => {
        console.log(post.id);
    })
})
.catch(e => {
    console.error(e)
})

// criando novo post com titulo, corpo e userId
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Flamengo',
    body: 'Flamengo tri-campeão daa libertadores, rumo ao quadra',
    userId: 81
})
.then(response => {
    console.log('Novo post criado', response.data);
})
.catch(error => {
    console.error('Error ao criar um post', error);
})

// atualizando o titulo
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'Em dezembro de 81'
})
.then(response => {
    console.log('Post atualizado', response.data);
})
.catch(reject => {
    console.error('Post nao atualizado', reject);
})

// deletando o post criado
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
    console.log('Post deletado', response.data);
})
.catch(reject => {
    console.error('Post não deletado', reject);
})