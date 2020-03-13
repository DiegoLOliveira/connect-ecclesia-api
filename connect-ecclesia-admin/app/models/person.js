module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define('Person', {
        name: DataTypes.STRING,
        birth: DataTypes.DATE,
        documentType: DataTypes.STRING,
        document: DataTypes.STRING,
    });

    return Person;
}