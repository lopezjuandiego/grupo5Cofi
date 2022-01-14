const path = require('path');
const fs = require('fs');
const file = require('./file');

const model = {
    file : path.resolve(__dirname, '../data/product.json'),
    
    read : () => fs.readFileSync(model.file),

    all : () => JSON.parse(model.read()),

    write: data => fs.writeFileSync(model.file,JSON.stringify(data,null,2)),

}

module.exports = model
