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

export const deleteTaskFromList = async(tasks = []) => {

    const choices = tasks.map( (task, i) => {
        const idx = `${chalk.cyan(`${i+1}.`)}`

        return {
            value: task.id,
            name: `${idx} ${task.description}`
        }
    })

    choices.unshift({
        value: '0',
        name: `${chalk.cyan('0.')} Cancelar`
    })

    const deleteOpts = [
        {
            type: 'list',
            name: 'id',
            message: `${chalk.bgCyan('\nBorrar:\n')}`,
            choices
        }
    ]

    const { id } = await inquirer.prompt(deleteOpts)

    return id;
}

export const confirm = async(message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(question)

    return ok
}

export const checkList = async(tasks = []) => {

    const choices = tasks.map( (task, i) => {
        const idx = `${chalk.cyan(`${i+1}.`)}`

        return {
            value: task.id,
            name: `${idx} ${task.description}`,
            checked: (task.completed) ? true : false
        }
    })

    const checkOpts = [
        {
            type: 'checkbox',
            name: 'ids',
            message: `${chalk.bgCyan('\nSeleccione tareas a completar:\n')}`,
            choices
        }
    ]

    const { ids } = await inquirer.prompt(checkOpts)

    return ids;
}
