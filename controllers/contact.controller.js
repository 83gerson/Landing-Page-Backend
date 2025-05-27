const Contact = require('../Models/contact.model');

// Enviar mensaje de contacto
const sendContactMessage = async (req, res) => {
    const { nombre, email, mensaje } = req.body;

    try {
        const newContact = new Contact({
            nombre,
            email,
            mensaje
        });

        await newContact.save();

        res.status(201).json({
            success: true,
            message: 'Mensaje enviado correctamente',
            data: newContact
        });
    } catch (error) {
        console.error("Error al enviar mensaje de contacto:", error);
        res.status(500).json({
            success: false,
            message: 'Error al enviar el mensaje',
            error: error.message
        });
    }
};

// Obtener todos los mensajes de contacto
const getContactMessages = async (req, res) => {
    try {
        const messages = await Contact.find().sort({ fecha: -1 });
        res.status(200).json({
            success: true,
            data: messages
        });
    } catch (error) {
        console.error("Error al obtener mensajes de contacto:", error);
        res.status(500).json({
            success: false,
            message: 'Error al obtener los mensajes',
            error: error.message
        });
    }
};

module.exports = { sendContactMessage, getContactMessages };