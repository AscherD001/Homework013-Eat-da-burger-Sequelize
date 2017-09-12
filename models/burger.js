module.exports = function(sequelize, Sequelize) {
    var Burger = sequelize.define("burger", {
        burger_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1, 100],
                is: /\b[a-z]/i
            }
        },
        devoured: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });
    return Burger;
};