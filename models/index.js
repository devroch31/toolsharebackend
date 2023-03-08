const user = require("./user");
const tool = require("./tool");
const toolType = require("./toolType");

tool.belongsTo(user,{
    onDelete:"CASCADE",
    as:'owner',
    foreignKey: {
        allowNull: false
    }
});

tool.belongsTo(user, {
    onDelete:"CASCADE",
    as:'borrower'
});

tool.belongsTo(toolType,{
    onDelete:"CASCADE"
});

toolType.hasmany(tool)

TODO: // add share history

module.exports = {
    user,
    tool,
    toolType
}