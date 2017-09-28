module.exports = (sequelize, DataTypes) => {
	const CashOutflows = sequelize.define('CashOutflows', {
    cashOutflows_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
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
    tableName: 'cashOutflows'
  });
	return CashOutflows;
};