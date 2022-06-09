import chalk from 'chalk'

//import { showMessages, pause } from './helpers/messages.js'
import { inquirerMenu, pause, readInput } from './helpers/inquirer.js'
import saveFile from './helpers/saveFile.js'
import Tasks from './models/tasks.js'

console.clear()

const main = async() => {
    
    let opt = ''
    let tasks = new Tasks();

    do {
        //opt = await showMessages()

        opt = await inquirerMenu()
        console.log(chalk.cyan(opt))
        
        switch (opt) {
            case '1':
                const description = await readInput('Ingrese la descripción de la tarea: ')
                tasks.add(description)
                break;
            case '2':
                console.log( tasks.listArr );
                break;
        }   

        saveFile('./db/tasks.json', tasks.listArr)

        await pause()

    } while (opt !== '0')

}

main()