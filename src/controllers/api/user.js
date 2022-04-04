const db = require("../../database/models");
const Op = db.Sequelize.Op

module.exports = {
//ENDPOINT - Listado de Usuarios
  
list: (req, res) => {

    db.User.findAll({
      
      include: ['avatars']
    })
    .then((users)=> {
      if(users.length > 0){
                
        let response = {
            meta: {
                status: 200,
                totalUsers: users.length
            },
            data: []
        }
        users.forEach(user => {
            response.data.push({
                id: user.id,
                Nombre: user.nombre,
                Apellido: user.apellido,
                Email: user.email,
                urlAvatar: "http://localhost:3050/uploads/avatars/" + user.avatars.Url,
                urlUser: "http://localhost:3050/api/users" + `/api/users/${user.id}`
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

  //ENDPOINT - Usuario por ID

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
                urlUser: "http://localhost:3050/api/users" + `/api/users/${user.id}`
              
            },
            
            status: 200,
        })       

      })

  },
//ENDPOINT - Último usuario agregado

  last: (req, res) => {
    db.User.findOne({ 
      include: [ "avatars"],
        order: [['id', 'DESC']]
    
    })
    
    .then(user => {

      return res.status(200).json({
        data: {
            id: user.id,
            Nombre: user.nombre,
            Apellido: user.apellido,
            Email: user.email,
            Administrador: user.admin,
           urlAvatar: "http://localhost:3050/uploads/avatars/" + user.avatars.Url,
           urlUser: "http://localhost:3050/api/users" + `/api/users/${user.id}`
          
        },
        
        status: 200,
    })       
      })

}
 
}
