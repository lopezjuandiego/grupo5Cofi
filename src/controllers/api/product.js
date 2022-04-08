const db = require("../../database/models");
const Op = db.Sequelize.Op

module.exports = {
//ENDPOINT - Listado de Productos

  list: (req, res) => {

    db.Product.findAll({
        include: [ "origen", "grano","cantidad","imagen"]}
)
        .then((products)=> {
      if(products.length ){
                
        let response = {
            meta: {
                status: 200,
                totalProducts: products.length,
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
                urlImagen: `http://localhost:3050/uploads/${product.imagen.Url}`,
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
//ENDPOINT - Producto por ID

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
//ENDPOINT - Último producto agregado

  last: (req, res) => {
    db.Product.findOne({ 
      include: [ "origen", "grano","cantidad","imagen"],
        order: [['id', 'DESC']]
    })
    
    .then(product => {

      return res.status(200).json({
        data: {
          id: product.id,  
          Origen: product.origen.country,
          Grano: product.grano.tipoDeGrano,
          Cantidad: product.cantidad.Cantidad,
          Precio: product.Precio,
          Oferta: product.Oferta,
          urlImagen: "http://localhost:3050/uploads/" + product.imagen.Url,
           urlProduct:"http://localhost:3050" + `/api/products/${product.id}`              
      },
        
        status: 200,
    })       
      })

}
 
 
}