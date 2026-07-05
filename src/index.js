import "dotenv/config"
import express from 'express'

// CREAR INSTANCIA DE EXPRESS
const app = express()
const PORT = process.env.PORT

// ESPECIFICAR QUE TRABAJAREMOS CON JSON
app.use(express.json())

// CREAMOS EL SERVER
app.listen(PORT, () => {
    console.log(`Server running in ${PORT} 🚀🚀🚀`);
})