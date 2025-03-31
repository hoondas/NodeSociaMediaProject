const messages = [
    { id: 1, text: "Olá, esta é a primeira mensagem!" },
    { id: 2, text: "Esta é a segunda mensagem, bem-vindo!" },
    { id: 3, text: "Aqui está outra mensagem para exibir!" }
  ];
  
  const getMessages = (req, res) => {
    res.json(messages);  // Envia as mensagens em formato JSON
  };

  const createMessage = (req, res) => {
    const {text} = req.body;

    const newMessage = {
        id: messages.length + 1,
        text
    };

    messages.push(newMessage);
    res.status(201).json(newMessage);
  }
  
  module.exports = { getMessages, createMessage  };
  