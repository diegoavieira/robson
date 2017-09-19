import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define('user', {
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
    tableName: 'user',
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
    user.isPassword = (encodedPassword, password) => {
		return bcrypt.compareSync(password, encodedPassword);
	};
	return user;
};