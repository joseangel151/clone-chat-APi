const { DataTypes } = require('sequelize')
	

	const db = require('../utils/database')
	

	const Participants = db.define('participants', {
	    id: {
	        type: DataTypes.BIGINT,
	       autoIncrement: true, //! no estoy seguro si todos deben tener auto-incremento
	        primaryKey: true,
	    },
	    user_id: {
	        type: DataTypes.STRING,
	        allowNull: false, 
	    },
        conversation_id: {
	        type: DataTypes.STRING,
	        allowNull: false, 
	    },
	    is_admin: {
	        type: DataTypes.BOOLEAN,
	        allowNull: false
        }
	})
	module.exports = Participants