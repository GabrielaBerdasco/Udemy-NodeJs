import inquirer from 'inquirer';
import chalk from 'chalk';

const menuOpts = [
    { 
        type: 'list',
        name: 'option',
        message: `${chalk.bgCyan('\nSeleccione una opción:\n')}`,
        choices: [
            {
                value: '1',
                name: `${chalk.cyan( '1.' )} Crear una nueva tarea`
            },
            {
                value: '2',
                name: `${chalk.cyan( '2.' )} Listar tareas`
            },
            {
                value: '3',
                name: `${chalk.cyan( '3.' )} Lista tareas completadas`
            },
            {
                value: '4',
                name: `${chalk.cyan( '4.' )} Lista tareas pendientes`
            },
            {
                value: '5',
                name: `${chalk.cyan( '5.' )} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${chalk.cyan( '6.' )} Eliminar tareas`
            },
            {
                value: '0',
                name: `${chalk.cyan( '0.' )} Finalizar programa`
            }
        ]
    },
]

export const inquirerMenu = async() => {
    const { option } = await inquirer.prompt(menuOpts)

    return option
}

export const pause = async() => {
    await inquirer.prompt([
        {
            type: 'input',
            name: 'pause',
            message: `Presione ${chalk.bgCyan('ENTER')} para continuar...`
        }
    ])
}

export const readInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate( value ){
                if (value.length) {
                    return true
                } else {
                    return 'Debe ingresar un valor'
                }
            }
        }
    ]
    
    const { description } = await inquirer.prompt(question)

    return description
}

