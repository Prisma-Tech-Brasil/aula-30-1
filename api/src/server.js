const express = require("express");
const fs = require("fs"); // importa o módulo file system do node
const path = require("path");

const fsPromises = fs.promises; // Import o módulo fs com suporte a Promises

const servidor = express();

servidor.use(express.json()); // Permite que o servidor parseie JSON no corpo das requisições

const caminhoArquivo = path.join(__dirname, "dados.txt");

// Rota para ler o arquivo usando callback
servidor.get("/arquivo/callback", (_req, res) => {
  fs.readFile(caminhoArquivo, "utf-8", (erro, dados) => {
    if (erro) {
      return res
        .status(500)
        .json({ erro: "Erro ao ler o arquivo usando callback" });
    }
    res.json({ conteudo: dados });
  });
});

// Rota para ler arquivo usando Promise
servidor.get("/arquivo/promise", async (_req, res) => {
  try {
    const dados = await fsPromises.readFile(caminhoArquivo, "utf8");
    // Remover caracteres indesejados e filtrar linhas vazias
    dados = dados
      .split("\r")
      .join("")
      .split("\n")
      .filter((linha) => linha.trim() !== "");

    res.json({ conteudo: dados });
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao ler o arquivo usando Promise" });
  }
});

servidor.listen(3000, () => console.log("Servidor está rodando... 🔥"));
