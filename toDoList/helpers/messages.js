import chalk from 'chalk'
import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'

export const showMessages = () => {

    return new Promise(resolve => {
        

        console.log(`${chalk.cyan('1.')} Crear tarea`);
        console.log(`${chalk.cyan('2.')} Listar tareas`);
        console.log(`${chalk.cyan('3.')} Listar tareas completadas`);
        console.log(`${chalk.cyan('4.')} Listar tareas pendientes`);
        console.log(`${chalk.cyan('5.')} Completar tarea(s)`);
        console.log(`${chalk.cyan('6.')} Borrar tarea`);
        console.log(`${chalk.cyan('0.')} Finalizar programa \n`);


        const rl = readline.createInterface({ input, output});
        rl.question(`${chalk.bgCyan('Seleccione una opción:')} `, (answer) => {
            rl.close();
            resolve(answer);
        });

    });
}

export const pause = () => {

    return new Promise(resolve => {

        const rl = readline.createInterface({ input, output});
        rl.question(chalk.magenta('\nPresione ENTER para continuar...\n'), () => {
            rl.close();
            resolve();
        });

    });

}

