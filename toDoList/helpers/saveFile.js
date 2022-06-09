import fs from 'fs';

const saveFile = (fileName, data) => {
    fs.writeFileSync( fileName, JSON.stringify(data) );
}

export default saveFile;