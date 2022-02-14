const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const validator = require('express-validator');

const model = {
    file: path.resolve(__dirname, '../data/user.json'),
    read: () => fs.readFileSync(model.file, 'utf8'),
    write: data => fs.writeFileSync(model.file, data),
    get: () => JSON.parse(model.read()),
    save: data => model.write(JSON.stringify(data, null, 2)),
    search: (prop,value) => model.get().find(user => user[prop] == value),
    generate: data => Object({
        id: model.get().length == 0 ? 1 : model.get().pop().id +1,
        nombre:data.nombre,
        apellido:data.apellido,
        email: String(data.email),   
        password:bcrypt.hashSync(data.password,10),                             
        avatar: data.avatar ? data.avatar : null,
        admin: data.email.includes('@cofi') ? true : false,
         
    }),
    
    create: data => {
        const users = model.get();
        const user = model.generate(data);
        users.push(user);
        model.save(users);
        return user;
    },
    update: (id,data) => {
        const users = model.get();
        const updates = users.map(user => user.id === id ? {...user, ...data} : user);
        model.save(updates);
        return updates.find(user => user.id === id);
    },
    passwordEdit: data => {// buscar el usuario, guardarlo en una variable dentro de un objet (como create), borrarlo del json, y volverlo a crear con la nueva contraseño
        const users = model.get();
        const updates = users.map(user => user.password === password ? {...user, ...data} : user);
        model.save(updates);
        return updates.find(user => user.password === password);
    },
}

module.exports = model;