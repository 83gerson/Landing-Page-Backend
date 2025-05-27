const express = require('express');
const { sendContactMessage, getContactMessages } = require('../controllers/contact.controller');

const router = express.Router();

// Middleware de logging para debug
router.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - Body:`, req.body);
  next();
});

// Enviar mensaje de contacto
router.post('/', sendContactMessage);

// Obtener mensajes 
router.get('/', getContactMessages);

// Ruta de prueba específica para el router de contacto
router.get('/test', (req, res) => {
  res.json({
    success: true,
    message: 'Router de contacto funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;