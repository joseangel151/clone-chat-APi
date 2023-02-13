const express = require('express')
const app = express()

const responseHandlers = require('./utils/handleResponses')
const usersRouter = require('./users/users.router')
const conversationsRouter = require('./conversations/conversations.router')
const messagesRouter = require('./messages/messages.router')
const participantsRouter = require('./participants/participants.router')

const db = require('./utils/database')

app.use(express.json())

db.authenticate() //? Mostrar en consola de manera informativa si la conexion se hizo de manera correcta
    .then(() => {
        console.log('Las credenciales de la base de datos son correctas')
    })
    .catch((err) => {
        console.log(err) //! Errores de autenticacion (contraseña, usuario o hosts)
    })

db.sync() //? Sincronizar nuestra base de datos con los modelos que tenemos definidos
    .then(() => {
        console.log('La base de datos del virus ha sido actualizada')
    })
    .catch(err => {
        console.log(err) //! error en las tablas, propiedades, etc
    })
//! no estoy seguro que vaya, me parece lo mismo que el texto de abajo
 //!   app.get('/', (req, res) => {
 //!       res.json({
 //!           message: 'Server Ok!',
 //!           routes: {          
 //!               "users": "http://localhost:9000/api/v1/users",
 //!               "conversations": "http://localhost:9000/api/v1/conversations",
 //!               "messages": "http://localhost:9000/api/v1/messages",
 //!               "participants": "http://localhost:9000/api/v1/participants",
 //!           }
 //!       })
 //!   })

app.get('/', (req, res) => {
    responseHandlers.success({
        res,
        status: 200,
        message: 'Servidor inicializado correctamente',
        data: {
            "users": "http://localhost:9000/api/v1/users",
            "conversations": "http://localhost:9000/api/v1/conversations",
            "messages": "http://localhost:9000/api/v1/messages",
            "participants": "http://localhost:9000/api/v1/participants",
            
        }
    })
})

app.use('/api/v1',usersRouter) //! no estoy seguro por el use de abajo
app.use('/api/v1',conversationsRouter) //! no estoy seguro por el use de abajo
app.use('/api/v1',messagesRouter) //! no estoy seguro por el use de abajo
app.use('/api/v1',participantsRouter) //! no estoy seguro por el use de abajo


//? Esta debe ser la ultima ruta en mi app
app.use('*', (req, res)=> {
    responseHandlers.error({
        res,
        status: 404,
        message: 'URL not found, please try with http://localhost:9000/',
    })
})

//app.use('/api/v1',postsRouter)

app.listen(9000,() => {
    console.log('Server started at port 9000')
})
