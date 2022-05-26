import chalk from 'chalk'

import { inquirerMenu } from './helpers/inquirer.js'

console.clear()

const main = async() => {
    console.log(chalk.cyan('Hello World'))
    let opt = ''
    do {

        opt = await inquirerMenu()
        console.log(chalk.cyan(opt))
        

    } while (opt !== '0')

}

main()