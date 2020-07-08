/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mb_type', {
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		status: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			defaultValue: '1'
		},
	}, {
		tableName: 'mb_type',
		timestamps: true,
		createdAt: 'create_time',
		updatedAt: 'update_time'
	});
};
