import {Router} from 'express';

const usersRouter = Router()

usersRouter.get("/", (req, res) => {
    // Buscar en la Base de Datos
    console.log("Alguien consulto el endpoint")
    res.status(200).json({message: "Endpoint de obtener funcionando"})
})

usersRouter.post("/create", (req, res) => {
    const {name, age} = req.body
    if (!name || !age){
        return res.status(400).json({message: "Faltan datos: nombre o edad"})
    }
    res.status(201).json({message: `El usuario ${name} de ${age} se ha creado`})
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