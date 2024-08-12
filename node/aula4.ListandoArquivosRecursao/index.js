const fs = require('fs').promises;
const { readdir } = require('fs');
const path = require('path');


async function fileSystem(localidade) {
    // __dirname or __filename
    localidade = localidade || path.resolve(__dirname);
    const files = await fs.readdir(localidade);
    walk(files, localidade)

}

// convertir array em uma string
async function walk(files, localidade) {
    for(let file of files) {
        const fileFullPath = path.resolve(localidade, file);
        const stats = await fs.stat(fileFullPath);
        
        
        if(/\.git/g.test(fileFullPath)) continue;

        if(/node_modules/.test(fileFullPath)) continue;



        if(stats.isDirectory()) {
            fileSystem(fileFullPath)
            continue;
        }

        // achando apenas as referencia
        if(!/\.css$/g.test(fileFullPath)) continue;


        console.log(fileFullPath);
    }
}

fileSystem('/Users/lamme/OneDrive/Desktop/CursoJavaScript');