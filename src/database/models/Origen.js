module.exports = (sequelize, dataTypes) => {
    let alias = 'Origen'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
       
        Pais: {
            type: dataTypes.STRING,
            allowNull: false
        },
    
    };
    let config = {
        timestamps: false,
        tableName: 'origen'
    }
    const Origen = sequelize.define(alias,cols,config);

  

   Origen.associate = function (models) {
        Origen.hasMany(models.Product, { 
            as: "products",
            foreignKey: "OrigenID"
        })

      
    }

    return Origen
};