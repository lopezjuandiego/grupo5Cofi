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
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Imagen = sequelize.define(alias,cols,config);

    User.associate = function (models) {
        User.belongsTo(models.User, { 
            as: "Imagen",
            foreignKey: "UserID"
        })

    return Imagen;
     }
};