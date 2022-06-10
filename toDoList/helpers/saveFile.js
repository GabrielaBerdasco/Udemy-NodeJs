import fs from 'fs';

const fileName = './db/tasks.json'

const saveFile = (data) => {
    fs.writeFileSync( fileName, JSON.stringify(data) );
}

const readDB = () => {
    if( !fs.existsSync(fileName) ) {
        return null;
    }

    let data = fs.readFileSync( fileName, 'utf-8' );
    return JSON.parse(data);
}

export { saveFile, readDB };