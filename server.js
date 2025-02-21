import { createServer } from "http";

// Cria o servidor
const server = createServer((req, res) => {
  // Verifica se a rota solicitada é "/ping"
  if (req.url === "/ping") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("pong"); // Responde com 'pong'
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Rota não encontrada"); // Responde com erro 404 para outras rotas
  }
});

// Define a porta do servidor
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
