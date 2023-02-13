const userControllers = require('./users.controllers')
	

	const getAllUsers = (req, res) => {
	    userControllers.findAllUsers()
	        .then(data => {
	            res.status(200).json(data)
	        })
	        .catch(err => {
	            res.status(400).json(err)
	        })
	}
	

	const getUserById = (req, res) => {
		    const id = Number(req.params.id)
        userControllers.findUserById(id)
	        .then(data => {
	            if(data){
	                res.status(200).json(data)
	            } else {
	                res.status(404).json({message: 'User not found'})
	            }
	        })
	        .catch(err => {
	            res.status(400).json(err)
	        })
	}
	

	const postUser = (req, res) => {
	    const userObj = req.body 
	    userControllers.createUser(userObj)
	        .then(data => { 
	            res.status(201).json(data)
	        })
	        .catch(err => {
	            res.status(400).json(err)
	        })
	}
	

	const deleteUser = (req, res) => {
	    const id = req.params.id 
	

	    userControllers.deleteUser(id)
	        .then(data => {
	            if(data){
	                res.status(204).json()
	            } else {
	                res.status(404).json({message: 'User not found'})
	            }
	        })
	        .catch(err => {
	            res.status(400).json(err)
	        })
	}
	

	const patchUser = (req, res) => {
	    const id = req.params.id 
	    const userObj = req.body 
	    userControllers.updateUser(id, userObj)
	        .then(data => {
	            if(data){
	                res.status(200).json({message: `User with id: ${id} updated succesfully`})
	            } else {
	                res.status(404).json({message: 'User not found'})
	            }
	        })
	        .catch(err => {
	            res.status(400).json(err)
	        })
	}
	

	const putUser = (req, res) => {
	    const id = req.params.id 
	    const userObj = req.body 
	
//!VERIFICAR SI ESTA SECCION ESTA CORRECTA CON LOS PARAMETROS COLOCADOS
	    if(!userObj.first_name || !userObj.last_name || !userObj.email || !userObj.password || !userObj.profile_image || !userObj.is_active || !userObj.phone){
	        return res.status(400).json({
	            message: 'Missing Data',
	            example_fields: {
	                first_name: 'String',
                    last_name: 'String',
                    email: 'joseangel151@gmil.com',
                    password: '123456',
                    profile_image: 'https://www.google.com/',
	                is_active: 'true',
	                phone: '+51939417466'
	            }
	        })
	    }
	

	    userControllers.updatePost(id, userObj)
	        .then(data => {
	            if(data){
	                res.status(200).json({message: `User with id: ${id} updated succesfully`})
	            } else {
	                res.status(404).json({message: 'User not found'})
	            }
	        })
	        .catch(err => {
	            res.status(400).json(err)
	        })
	}
	

module.exports = {
	    getAllUsers,
	    getUserById,
	    postUser,
	    deleteUser,
	    patchUser,
	    putUser
	}
