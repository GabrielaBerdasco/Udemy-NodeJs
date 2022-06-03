const fs = require('fs');

require('colors');

const createFile = async (base, list, hasta = 10) => {
    try {

        let data = '';
        let consola = '';

        for(let i = 1; i <= hasta; i++){
            data += `${base} * ${i} = ${base * i}\n`;
            consola += `${base} ${'*'.cyan} ${i} ${ '='.cyan } ${base * i}\n`;   
        }

        if(list){
            console.log(`\n=============================`.cyan);
            console.log(` Tabla de multiplicar del ${base}`.bgMagenta);
            console.log(`=============================\n`.cyan);
            console.log(consola);
        }

        fs.writeFileSync(`./tables/tabla-${base}.txt`, data);
       
        return `tabla-${base}.txt`;
        
    } catch (err) {
        throw err;
    }

}

module.exports = { createFile };