module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blocked: {
      type: DataTypes.BOOLEAN,
      
      defaultValue: false, // Default: user is not blocked
    },
  });

  // Define associations
  User.associate = (models) => {
    // Many-to-Many relationship with Role
    User.belongsToMany(models.Role, {
      through: "user_roles", // Join table name
      foreignKey: "userId",  // Key in user_roles for User
      otherKey: "roleId",    // Key in user_roles for Role
    });
  };

  // Define the getRoles function
  User.prototype.getRoles = async function () {
    const roles = await this.getRoles(); // Fetch roles via the association
    return roles.map((role) => role.name); // Map role objects to their names
  };

  return User;
};
