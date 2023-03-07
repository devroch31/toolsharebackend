const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class toolType extends Model {}

toolType.init({
    toolTypename:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[1]
        }   
    }
},{
    sequelize,
});

module.exports=toolType