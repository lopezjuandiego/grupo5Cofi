module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; 
    let cols = {
        id: {
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

    Product.associate = function (models) {

        Product.belongsTo(models.Origen, { 
            as: "origen",
            foreignKey: "Origen"
        }),

        Product.belongsTo(models.Grano, { 
            as: "grano",            
            foreignKey: 'Grano',
            
        }),

        Product.belongsTo(models.Gramo, { 
            as: "cantidad",            
            foreignKey: 'Cantidad',
            
        }),

        Product.belongsTo(models.Imagen, { 
            as: "imagen",            
            foreignKey: 'Imagen',
            
        })
    }

    return Product
};