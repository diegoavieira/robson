module.exports = (sequelize, DataTypes) => {
	const Cashs = sequelize.define('Cashs', {
    cashs_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    cashType: {
      type: DataTypes.ENUM('receipt', 'outflow'),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
  	schema: 'public',
    tableName: 'cashs'
  });
	return Cashs;
};