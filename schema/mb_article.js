/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mb_article', {
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
		type: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		key_words: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		status: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			defaultValue: '1'
		},
	}, {
		tableName: 'mb_article',
		timestamps: true,
		createdAt: 'create_time',
		updatedAt: 'update_time'
	});
};
