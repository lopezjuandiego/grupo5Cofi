module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; 
    let cols = {
        ID: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
       
        OrigenID: {
            type: dataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        GranoID: {
            type: dataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        CantidadID: {
            type: dataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        Precio: {
            type: dataTypes.BIGINT,
            allowNull: false
        },
        Oferta: {
            type:dataTypes.BOOLEAN,
        },
        ImagenID: {
            type: dataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        }
       
    };
    let config = {
        timestamps: false,
        tableName: 'productos'
    }
    const Product = sequelize.define(alias,cols,config);

   /* Product.associate = function (models) {

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
            
        }),

        Product.belongsTo(models.imagen, { 
            as: "imagen",            
            foreignKey: 'ImagenID',
            
        })
    }*/

    return Product
};