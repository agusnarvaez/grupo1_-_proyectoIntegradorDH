module.exports = (sequelize, dataTypes) => {
    let alias = 'Invoicing_address'; //Asignamos Alias
    let cols = { //Asignamos columnas
        id: {
            type: dataTypes.INTEGER, //Indicamos tipo de dato
            primaryKey: true, //Indicamos si es clave primaria
            autoincrement: true // Indicamos si es autoincremental, en el caso de id lo es
        },
        city: {
            type: dataTypes.STRING
        },
        province: {
            type: dataTypes.STRING
        },
        street: {
            type: dataTypes.STRING
        },
        number: {
            type: dataTypes.INTEGER
        },
        floor: {
            type: dataTypes.STRING
        },
        apartment: {
            type: dataTypes.STRING
        },
        zip_code: {
            type: dataTypes.INTEGER
        },
        user_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = { //Configuraciones adicionales de la tabla
        tableName: 'invoicing_address',
        timestamps: false
    }
    let Invoicing_address = sequelize.define(alias, cols, config); //Creación de la tabla con sus datos

    //Asociaciones que tenga esta tabla
    Invoicing_address.associate = (models) => {
        Invoicing_address.belongsTo( //Indicamos el tipo de relación
            models.User, // Llamamos al modelo
            {
                as: 'users', //Nombre tabla
                foreignKey: 'user_id' //Clave foránea
            })
    };

    return Invoicing_address; //Exportamos modelo de tabla
}