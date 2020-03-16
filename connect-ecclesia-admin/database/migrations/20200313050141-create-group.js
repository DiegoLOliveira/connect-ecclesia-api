'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Group', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      activityDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      leader: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: Person,
          key: id
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Group');
  }
};