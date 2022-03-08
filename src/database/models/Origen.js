module.exports = (sequelize, dataTypes) => {
    let alias = 'Origen'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            
            autoIncrement: true
        },
       
        country: {
            type: dataTypes.INTEGER,
            allowNull: true
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