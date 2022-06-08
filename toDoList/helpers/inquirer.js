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
                name: '1. Crear una nueva tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Lista tareas completadas'
            },
            {
                value: '4',
                name: '4. Lista tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Eliminar tareas'
            },
            {
                value: '0',
                name: '0. Finalizar programa'
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