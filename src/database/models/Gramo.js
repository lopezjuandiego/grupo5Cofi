module.exports = (sequelize, dataTypes) => {
    let alias = 'Gramo'; 
    let cols = {
        ID: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
       
        Cantidad: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    
    };
    let config = {
        tableName: 'gramos',
        timestamps: false,    
        }

    const Gramo = sequelize.define(alias,cols,config);
    

   /* Gramo.associate = function (models) {
        Gramo.belongsTo(models.Product, {
            as: "productGramo",
            foreignKey: "CantidadID"
        })

      
    }*/

    return Gramo
};