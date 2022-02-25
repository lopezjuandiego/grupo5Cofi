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
            type: dataTypes.TEXT,
            allowNull: false
        },

        Type: {
            type: dataTypes.VARCHAR(255),
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
            foreignKey: "avatarID"
        })
        Imagen.belongsTo(models.Product, { 
            as:'imagenProduct',
            foreignKey:'ImagenID'
        })

    return Imagen;
     }
};