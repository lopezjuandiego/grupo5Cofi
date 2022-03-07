module.exports = (sequelize, dataTypes) => {
    let alias = 'Grano'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            
            autoIncrement: true
        },
       
        tipoDeGrano: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
    
    };
    let config = {
        timestamps: false,
        tableName: 'grano'
    }
    const Grano = sequelize.define(alias,cols,config);
    

    Grano.associate = function (models) {
        Grano.hasMany(models.Product, { 
            as: "products",
            foreignKey: "GranoID"
        })

      
    }

    return Grano
};