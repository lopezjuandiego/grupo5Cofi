module.exports = (sequelize, dataTypes) => {
    let alias = 'User'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
       
        nombre: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        apellido: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
     
        admin: {
            type:dataTypes.BOOLEAN,
        },
        avatar: {
            type: dataTypes.INTEGER,            
            allowNull: true
        }
       
    };
    let config = {
        timestamps: false,
        tableName: 'usuarios'
    }
    const User = sequelize.define(alias,cols,config);

    User.associate = function (models) {
        User.belongsTo(models.Imagen, { 
            as: "avatars",
            foreignKey: "avatar"
        })

      
    }

    return User
};