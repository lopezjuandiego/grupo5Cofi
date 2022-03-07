module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            
            autoIncrement: true
        },
       
        OrigenID: {
            type: dataTypes.INTEGER,
            //foreignKey: true,
            
        },
        GranoID: {
            type: dataTypes.INTEGER,
           // foreignKey: true,
           
        },
        CantidadID: {
            type: dataTypes.INTEGER,
          //  foreignKey: true,
            
        },
        Precio: {
            type: dataTypes.BIGINT,
           
        },
        Oferta: {
            type:dataTypes.BOOLEAN,
        },
       ImagenID: {
            type: dataTypes.INTEGER,
           // foreignKey: true,
            allowNull: true
        }
       
    };
    let config = {
        timestamps: false,
        tableName: 'productos'
    }
    const Product = sequelize.define(alias,cols,config);

    Product.associate = function (models) {

        Product.belongsTo(models.Origen, { 
            as: "origen",
            foreignKey: "OrigenID"
        }),

        Product.belongsTo(models.Grano, { 
            as: "grano",            
            foreignKey: 'GranoID',
            
        }),

        Product.belongsTo(models.Gramo, { 
            as: "cantidad",            
            foreignKey: 'CantidadID',
            
        })

      Product.belongsTo(models.Imagen, { 
            as: "imagen",            
            foreignKey: 'ImagenID',
            
        })
    }

    return Product
};