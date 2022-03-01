module.exports = (sequelize, dataTypes) => {
    let alias = 'Imagen'; 
    let cols = {
        ID: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
       
        Url: {
            type: dataTypes.STRING,
            allowNull: false
        },

        Type: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    
    };
    let config = {
        timestamps: false,
       tableName: 'imagenes'
    }
    const Imagen = sequelize.define(alias,cols,config);

    Imagen.associate = function (models) {
        Imagen.belongsTo(models.User, { 
            as: "imagenUser",
            foreignKey: "avatar"
        })
        Imagen.belongsTo(models.Product, { 
            as:'imagenProduct',
            foreignKey:'Imagen'
        })
    }
    return Imagen;
     }
