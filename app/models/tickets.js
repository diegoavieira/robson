module.exports = (sequelize, DataTypes) => {
	const Tickets = sequelize.define('Tickets', {
    ticket_id: {
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
    tableName: 'tickets'
  });
	return Tickets;
};