const { createFile } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs')

require('colors');

createFile(argv.base, argv.list, argv.hasta)
    .then(archivo => console.log(`Archivo creado: ${archivo}\n`.bgMagenta))
    .catch(err => console.log(err));