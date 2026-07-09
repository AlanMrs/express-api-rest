import {Router} from 'express'
import prisma from '../lib/prisma.js'

const usersRouter = Router()

usersRouter.get("/", async (req, res) => {
    // Buscar en la Base de Datos
    try {
        const students = await prisma.student.findMany()
        res.status(200).json({success: true, message: "Endpoint de obtener Estudiantes", data: students})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: "Error interno del servidor"})
    }   
})

usersRouter.post("/create", async (req, res) => {
    const {studentCode, firstName, lastName, email, password, phone, birthDate} = req.body
    
    // Validar que los datos requeridos estén presentes
    if (!studentCode || !firstName || !lastName || !email || !password){
        return res.status(400).json({
            success: false,
            message: "Faltan datos: studentCode, firstName, lastName, email, password son requeridos"
        })
    }

    try {
        const newStudent = await prisma.student.create({
            data: {
                studentCode: studentCode,
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                phone: phone,
                birthDate: birthDate ? new Date(birthDate) : null
            }
        })

        return res.status(201).json({
            success: true,
            message: "Estudiante creado exitosamente",
            data: newStudent
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error interno del servidor"
        })
    }
})

usersRouter.put("/update/:id", async (req, res) => {
    const { id } = req.params
    const {studentCode, firstName, lastName, email, password, phone, birthDate} = req.body
    
    try {
        // Actualizar en la Base de Datos
        const updatedStudent = await prisma.student.update({
            where: { id: parseInt(id) },
            data: {
                studentCode: studentCode,
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                phone: phone,
                birthDate: birthDate ? new Date(birthDate) : null
            }
        })
        res.status(200).json({message: `El usuario con ID: ${id} se ha actualizado`, data: updatedStudent})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error interno del servidor"})
    }
})

usersRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params
    try {
        const deletedStudent = await prisma.student.delete({
            where: { id: parseInt(id) }
        })
        res.status(200).json({success: true, data: deletedStudent})
    } catch (error) {
        if(error.code === 'P2025') {
            res.status(404).json({success: false, message: `No se encontró el estudiante con ID: ${id}`})
        }
        res.status(500).json({success: false, message: "Error interno del servidor"})
    }
})

// MI PRIMER ENDPOINT
usersRouter.get("/test", (req, res) => {
    res.status(200).json({mensaje: "Hola a la fotmscion del MINED 2026 🙌"})
})

export default usersRouter