import chalk from 'chalk';

import { inquirerMenu, pause, readInput, deleteTaskFromList, confirm, checkList } from './helpers/inquirer.js'
import Search from './models/search.js';

console.clear()

const main = async() => {

    let opt;
    const search = new Search()

    do {
        console.clear()

        opt = await inquirerMenu()

        switch (opt) {
            case 1:
                //Mostrar mensaje
                const city = await readInput('Ingrese el nombre de la ciudad: ')
                await search.selectedCity( city )
                //Buscar los lugares

                //Seleccionar el lugar

                //Clima

                //Mostrar resultados
                console.log(chalk.magenta('\nInformación de la ciudad: \n'));
                console.log('Ciudad: ',);
                console.log('Lat: ',);
                console.log('Lng: ',);
                console.log('Temperatura: ',);
                console.log('Mínima: ',);
                console.log('Máxima: ',);
                break;
            case 2:
                break;
        }

        if(opt !== 0 ) await pause()

    } while (opt !== 0)
}

main()