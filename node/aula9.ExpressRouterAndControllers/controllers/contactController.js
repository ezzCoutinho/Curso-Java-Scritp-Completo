// colocando um formulario no contato
module.exports.contatoInicial = (req, res) => {
    res.send(
        `
       <form action ="/contatos" method = "POST">
            <h1> Insira o seu email, para que podemos entrar em contato </h1>
            Email para contato: <input type = "text" name ="email"><br>
            Número para contato: <input type = "text" name ="numero"><br>
                <button> Enviar ao suporte </button>
            </input>
        </form>
       `
    );
};

// colocando os valores inseridos do usuario no body
module.exports.postContatoInicial = (req, res) => {
    console.log(req.body);
    res.send(`Em breve entraremos em contato no email: ${req.body.email}`);
};