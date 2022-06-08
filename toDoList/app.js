import chalk from 'chalk'

import { inquirerMenu, pause } from './helpers/inquirer.js'
//import { showMessages, pause } from './helpers/messages.js'

console.clear()

const main = async() => {
    console.log(chalk.cyan('Hello World'))
    let opt = ''
    do {
        //opt = await showMessages()

        opt = await inquirerMenu()
        console.log(chalk.cyan(opt))
        
        await pause()

    } while (opt !== '0')

}

main()