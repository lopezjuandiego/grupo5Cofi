module.exports = (sequelize, dataTypes) => {
    let alias = 'Grano'; 
    let cols = {
        ID: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
       
        tipoDeGrano: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    
    };
    let config = {
        timestamps: false,
        tableName: 'grano'
    }
    const Grano = sequelize.define(alias,cols,config);
    

    Grano.associate = function (models) {
        Grano.belongsTo(models.Product, { 
            as: "productGrano",
            foreignKey: "GranoID"
        })

      
    }

    return Grano
};