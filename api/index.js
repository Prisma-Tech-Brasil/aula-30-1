const http = require("http");
const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");

const PORTA = 3000;

const manipuladorDeRequisicao = (req, res) => {
  switch (true) {
    case req.method === "GET" && req.url === "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Bem-vindo à minha API!");
      break;

    case req.method === "GET" && req.url === "/dados":
      // Lê o arquivo .xslx
      const caminhoDoArquivo = path.join(__dirname, "archive", "alunos_cadastrados.xlsx");
      const planilhaDeTrabalho = xlsx.readFile(caminhoDoArquivo);
      const aba = planilhaDeTrabalho.Sheets[planilhaDeTrabalho.SheetNames[0]];
      const dados = xlsx.utils.sheet_to_json(aba);

      // Envia o conteúdo do arquivo como JSON
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(dados));
      break;

    default:
      res.writeHead(404);
      res.end("Rota não encontrada");
      break;
  }
};

const servidor = http.createServer(manipuladorDeRequisicao);

servidor.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
