module.exports = (sequelize, dataTypes) => {
    let alias = 'Imagen'; 
    let cols = {
        id: {
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
        Imagen.hasMany(models.User, { 
            as: "users",
            foreignKey: "avatar"
        })
        Imagen.hasMany(models.Product, { 
            as:'products',
            foreignKey:'ImagenID'
        })
    }
    return Imagen;
     }
