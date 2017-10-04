import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define('Users', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
		schema: 'public',
    tableName: 'users',
		hooks: {
			beforeCreate: user => {
				const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
			},
			beforeUpdate: user => {
				const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
			}
		}
	});
  Users.isPassword = (encodedPassword, password) => {
		return bcrypt.compareSync(password, encodedPassword);
	};
	return Users;
};