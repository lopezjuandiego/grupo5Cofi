const path = require('path');
const fs = require('fs');
const file = require ('./file');

const model = {
    file: path.resolve(__dirname, '../data/product.json'),
    read: () => fs.readFileSync(model.file),
    write: data => fs.writeFileSync(model.file,JSON.stringify(data,null,2)),
    all: () => JSON.parse(model.read()),

    generate: data => Object({
        id: model.all().length == 0 ? 1 : model.all().pop().id +1,
        origen: data.origen,
        tipoDeGrano: data.tipoDeGrano,
        cantidad: parseInt(data.cantidad),
        precio: parseInt (data.precio),
        
       
    }),

    create: data => {
        let newProduct = model.generate(data);
        let all = model.all();
        all.push(newProduct);
        model.write(all)
        return newProduct
    },
    search: (prop, value) => model.all().find(element => element[prop] == value),


    
       
         
             


}





module.exports = model
