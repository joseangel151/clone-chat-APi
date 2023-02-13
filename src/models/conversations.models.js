const { DataTypes } = require('sequelize')
	

	const db = require('../utils/database')
	

	const Conversations = db.define('conversations', {
	    id: {
	        type: DataTypes.BIGINT,
	       autoIncrement: true, //! no estoy seguro si todos deben tener auto-incremento
	        primaryKey: true,
	    },
	    profile_image: {
	        type: DataTypes.STRING,
	        allowNull: false, //? not null
	    },
        name: {
	        type: DataTypes.STRING,
	        allowNull: false, //? not null
	    },
	    created_by: {
	        type: DataTypes.STRING,
	        allowNull: false
        },
        is_gruop: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
	})
	module.exports = Conversations