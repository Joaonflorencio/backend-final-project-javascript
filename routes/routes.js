const express = require('express');
const router = express.Router();

// Importando controladores
const ClienteController = require('../controller/ClienteController');
const MercadoriaController = require('../controller/MercadoriaController');

// Rotas para Clientes
router.post("/clientes", ClienteController.create);
router.get('/clientes', ClienteController.getAll);
router.get('/clientes/:id', ClienteController.getById);
router.put('/clientes/:id', ClienteController.update);
router.delete('/clientes/:id', ClienteController.delete);

// Rotas para Mercadorias
router.post("/mercadorias", MercadoriaController.create);
router.get('/mercadorias', MercadoriaController.getAll);
router.get('/mercadorias/:id', MercadoriaController.getById);
router.put('/mercadorias/:id', MercadoriaController.update);
router.delete('/mercadorias/:id', MercadoriaController.delete);

module.exports = router;
