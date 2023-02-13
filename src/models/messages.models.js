const { DataTypes } = require('sequelize')
	

	const db = require('../utils/database')
	

	const Messages = db.define('messages', {
	    id: {
	        type: DataTypes.BIGINT,
	       autoIncrement: true, 
	        primaryKey: true,
	    },
	    content: {
	        type: DataTypes.STRING,
	        allowNull: false, 
	    },
        participant_id: {
	        type: DataTypes.STRING,
	        allowNull: false, 
	    },
	    status: {
	        type: DataTypes.STRING,
	        allowNull: false
        }
	})
	module.exports = Messages