import "dotenv/config"
import express from 'express'
import usersRouter from './routes/users.routes.js'
import authRouter from './routes/auth.routes.js'
import {apikeyMiddleware} from './middleware/apikey.middleware.js'

// CREAR INSTANCIA DE EXPRESS
const app = express()
const PORT = process.env.PORT

// ESPECIFICAR QUE TRABAJAREMOS CON JSON
app.use(express.json())

// MIDDLEWARE
app.use(apikeyMiddleware)

// ENDPOINTS
app.use("/", usersRouter)
app.use("/auth", authRouter)


// CREAMOS EL SERVER
app.listen(PORT, () => {
    console.log(`Server running in ${PORT} 🚀🚀🚀`);
})