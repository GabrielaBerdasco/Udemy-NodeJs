import chalk from 'chalk'

//import { showMessages, pause } from './helpers/messages.js'
import { inquirerMenu, pause, readInput } from './helpers/inquirer.js'
import Tasks from './models/tasks.js'
import { saveFile, readDB } from './helpers/saveFile.js'

console.clear()

const main = async() => {
    
    let opt = ''
    const tasks = new Tasks();
    const db = readDB();
    
    if( db ) {
        tasks.loadTasksFromArr(db);
    }

    do {
        //opt = await showMessages()
        console.clear()
        
        opt = await inquirerMenu()
        
        switch (opt) {
            case '1':
                const description = await readInput('Ingrese la descripción de la tarea: ')
                tasks.add(description)
                break;
            case '2':
                tasks.showList()
                break;
            case '3':
                tasks.listCompleted()
                break;
            case '4':
                tasks.listCompleted(false)
                break;

        }   


        saveFile(tasks.listArr)

        await pause()

    } while (opt !== '0')

}

main()