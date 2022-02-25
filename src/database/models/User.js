module.exports = (sequelize, dataTypes) => {
    let alias = 'User'; 
    let cols = {
        ID: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
       
        nombre: {
            type: dataTypes.VARCHAR(255),
            allowNull: false
        },
        apellido: {
            type: dataTypes.VARCHAR(255),
            allowNull: false
        },
        email: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        password: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        admin: {
            type:dataTypes.TINYINT,
        },
        avatar: {
            type: dataTypes.INTEGER,
            foreignKey: true
        }
       
    };
    let config = {
        timestamps: false,
        tableName: 'usuarios'
    }
    const User = sequelize.define(alias,cols,config);

    User.associate = function (models) {
        User.belongsTo(models.Imagen, { 
            as: "avatar",
            foreignKey: "avatarID"
        })

      
    }

    return User
};