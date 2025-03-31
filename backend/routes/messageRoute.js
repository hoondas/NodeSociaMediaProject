const express = require('express');
const { getMessages, createMessage } = require('../controller/controller');

const router = express.Router();

router.get('/', getMessages);  // Rota GET para listar mensagens
router.post('/', createMessage); // POST das mensagens

module.exports = router;
