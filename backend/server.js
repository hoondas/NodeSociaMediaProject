const express = require('express');
const cors = require('cors');
const messageRoutes = require('./routes/messageRoute');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// Rota para listar mensagens
app.use('/messages', messageRoutes);

app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});
