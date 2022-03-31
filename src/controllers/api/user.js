const db = require("../../database/models");
const Op = db.Sequelize.Op

module.exports = {
//API listado de Usuarios
  list: (req, res) => {

    db.User.findAll({
      
      include: ['avatars']
    }, { attributes:['id', 'nombre', 'apellido', 'email']})
    .then((users)=> {
      if(users.length > 0){
                
        let response = {
            meta: {
                status: 200,
                totalUsers: users.length
            },
            data: []
            //data: users
        }
        users.forEach(user => {
            response.data.push({
                id: user.id,
                Nombre: user.nombre,
                Apellido: user.apellido,
                Email: user.email,
                urlUser: `/api/users/${user.id}`
            })
        });

        return res.status(200).json(response);
    }
    else{
        return res.status(404).json( {
          error: 'No hay usuarios'} );
    }
})
.catch(error=>{
    return res.status(500).json( {
       error: 'No se pudo conectar a la base' } );;
        })             
  },
//API de Usuario por ID
  showUser: (req, res) => {
    db.User.findByPk(req.params.id, 
         { include: ['avatars'] })

      .then(user => {

        return res.status(200).json({
            data: {
                id: user.id,
                Nombre: user.nombre,
                Apellido: user.apellido,
                Email: user.email,
                Administrador: user.admin,
                urlAvatar: "http://localhost:3050/uploads/avatars/" + user.avatars.Url,
                urlUser: `/api/users/${user.id}`
              
            },
            
            status: 200,
            //url: "http://localhost:3050/api/users" + req.url
        })       

      })

  },

 
 
}
