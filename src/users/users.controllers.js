const Users = require('../models/users.models')

const findAllUsers = async () => {
    const data = await Users.findAll()
    return data
}

const findUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createUser = async (userObj) => {
    //? Your code here:

 const newUser = {
        first_name: userObj.first_name,
        last_name: userObj.last_name,
        email: userObj.email,
        password: userObj.password,
        profile_image: userObj.profile_image,
        is_active: userObj.is_active,
        phone: userObj.phone
    }
    
    const data = await Users.create(newUser)
    return data


}

const updateUser = async (id, UserObj) => {
    //? Your code here:

    const data = await Users.update(userObj, {
        where: {
            id: id
        }
    })
    return data

}

const deleteUser = async (id) => {
    //? Your code here:
    const data = await Users.destroy({
        where: {
            id: id
        }
    })
    return data


}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
}