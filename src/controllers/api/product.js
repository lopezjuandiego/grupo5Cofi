const db = require("../../database/models");
const Op = db.Sequelize.Op

module.exports = {
//API listado de Productos
  list: (req, res) => {

    db.Product.findAll({
      
        include: [ "origen", "grano","cantidad","imagen"],
    }, { attributes:['id', 'origen', 'grano', 'cantidad']})
    .then((products)=> {
      if(products.length > 0){
                
        let response = {
            meta: {
                status: 200,
                totalProducts: products.length,
                //countCategory: products.origen.length
            },
            data: []
            
        }
        products.forEach(product => {
            response.data.push({
                id: product.id,
                Origen: product.origen,
                Grano: product.grano,
                Cantidad: product.cantidad,
                Precio: product.Precio,
                Oferta: product.Oferta,
                urlImagen: "http://localhost:3050/uploads/" + product.imagen.Url,
                urlProduct:"http://localhost:3050" + `/api/products/${product.id}`
               
            })
        });
                return res.status(200).json(response);
    }
    else{
        return res.status(404).json( {
          error: 'No hay productos'} );
    }
})
.catch(error=>{
    return res.status(500).json( {
       error: 'No se pudo conectar a la base' } );;
        })             
  },
//API de Producto por ID
  showProduct: (req, res) => {
    db.Product.findByPk(req.params.id, 
         {  include: [ "origen", "grano","cantidad","imagen"], })

      .then(product => {

        return res.status(200).json({
            data: {
                
                Origen: product.origen,
                Grano: product.grano,
                Cantidad: product.cantidad,
                Precio: product.Precio,
                Oferta: product.Oferta,
                urlImagen: "http://localhost:3050/uploads/" + product.imagen.Url,
                 urlProduct:"http://localhost:3050" + `/api/products/${product.id}`

                              
            },
            
            status: 200,
        })       

      })

  },

 
 
}