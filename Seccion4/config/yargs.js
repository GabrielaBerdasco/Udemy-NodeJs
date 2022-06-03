const argv = require('yargs')
    .option( 'b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla'
    })
    .option( 'l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Listar las tablas de multiplicar en consola'
    })
    .option( 'h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta que número llega la tabla'
    })
    .check( (argv) => {
        if( isNaN( argv.b ) ){
            throw new Error('La base no es un número');
        }
        if( isNaN( argv.h ) ){
            throw new Error('El hasta no es un número');
        }
        return true;
    })
    .argv;

    module.exports = argv;