import {Router} from 'express';

const usersRouter = Router()

usersRouter.get("/", (req, res) => {
    // Buscar en la Base de Datos
    console.log("Alguien consulto el endpoint")
    res.status(200).json({message: "Endpoint de obtener funcionando"})
})

usersRouter.post("/create", (req, res) => {
    const {studentCode, firstName, lastName, email, password, phone, birthDate} = req.body
    
    if (!studentCode || !firstName || !lastName || !email || !password){
        return res.status(400).json({
            success: false,
            message: "Faltan datos: studentCode, firstName, lastName, email, password son requeridos"
        })
    }

    try{

    }catch(error){
        res.status(500).json({message: "Error al crear el usuario"})
    }
})

usersRouter.put("/update/:id", (req, res) => {
    const { id } = req.params
    const {name, age} = req.body
    if (!name || !age){
        return res.status(400).json({message: "Faltan Datos: nombre o edad"})
    }
    res.status(200).json({message: `El usuario con ID: ${id} se ha actualizado`})
})

usersRouter.delete("/delete/:id", (req, res) => {
    const { id } = req.params
    res.status(200).json({message: `El usuario con ID: ${id} se ha eliminado`})
})

// MI PRIMER ENDPOINT
usersRouter.get("/test", (req, res) => {
    res.status(200).json({mensaje: "Hola a la fotmscion del MINED 2026 🙌"})
})

export default usersRouter