const path = require('path');
const fs = require('fs');
const fileModel = require ('./file');

const model = {
    file : path.resolve(__dirname, '../data/product.json'),
    read : () => fs.readFileSync(model.file),
    write: data => fs.writeFileSync(model.file,JSON.stringify(data,null,2)),
    all : () => JSON.parse(model.read()),
    

    generate: data => Object({
        id: model.all().length == 0 ? 1 : model.all().pop().id +1,
        origen: data.origen,
        tipoDeGrano: data.tipoDeGrano,
        cantidad: parseInt(data.cantidad),
        precio: parseInt (data.precio),
        oferta: data.oferta ? true : false,
        imagen: data.files.map (file => fileModel.create(file).id) 
    }),

    create: data => {
        let nuevoProducto = model.generate (data);
        let all = model.all ();
        all.push(nuevoProducto);
        model.write(all)
        return nuevoProducto
    },

    search: (prop, value) => model.all().find(element => element[prop] == value),
    
    update: (id,data) => {
        let all = model.all();
        let updated = all.map (e => {
            if (e.id == id){
                e.origen = data.origen;
                e.tipoDeGrano = data.tipoDeGrano;
                e.cantidad = data.cantidad;
                e.precio = data.precio;
                e.oferta = data.oferta ? true : false;
                return e 
            }
            return e
        })

        model.write(updated)
        let product = model.search ('id',id);
        return product
   
    },
        delete: id => model.write(model.all().filter(e => e.id != id))
  
}



module.exports = model