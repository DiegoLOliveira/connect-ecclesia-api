module.exports = (sequelize, DataTypes) => {
    const Contacts = sequelize.define('Contacts', {
        email: DataTypes.STRING,
        telephone: DataTypes.STRING,
        cellPhone: DataTypes.STRING,
        facebook: DataTypes.STRING,
    });

    return Contacts;
}