const fs = require('fs').promises;

module.exports = function (file, dado, flag) {
    return fs.writeFile(file, dado, { flag: flag, encoding: 'utf8'});
} 


