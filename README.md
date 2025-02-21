# 📌 Guia de Roteamento de API, Módulo `path` e Módulo `fs` no Node.js

## 📌 Introdução
Este documento aborda conceitos importantes sobre:
- **Roteamento em APIs** (como definir rotas e lidar com requisições no Node.js)
- **Módulo `path`** (para manipular caminhos de arquivos e diretórios)
- **Módulo `fs`** (para ler, escrever e modificar arquivos no sistema)

---

## 🚀 1. Roteamento de API

### 📌 O que é Roteamento?
Roteamento é o processo de definir quais funções devem ser executadas quando um cliente faz uma requisição para um endpoint específico da API.

### 📌 Exemplo prático com Express.js
O Express.js é um dos frameworks mais populares para criação de APIs no Node.js.

#### 🔹 Instalando o Express
```bash
npm install express
```

#### 🔹 Criando um servidor com rotas
```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Rota GET
app.get('/', (req, res) => {
    res.send('Bem-vindo à API!');
});

// Rota GET com parâmetro
app.get('/usuario/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ mensagem: `Usuário ${userId} encontrado!` });
});

// Rota POST
app.use(express.json());
app.post('/usuario', (req, res) => {
    const novoUsuario = req.body;
    res.json({ mensagem: 'Usuário criado com sucesso!', usuario: novoUsuario });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

### 📌 Tipos de Rotas Comuns
| Método | Descrição |
|---------|------------|
| GET     | Obtém dados do servidor |
| POST    | Envia dados para o servidor |
| PUT     | Atualiza dados existentes |
| DELETE  | Remove um recurso |

---

## 🚀 2. Módulo `path`
O módulo `path` é usado para manipular caminhos de arquivos e diretórios de forma segura e multiplataforma.

### 📌 Principais Métodos

#### 🔹 `path.join()` → Junta segmentos de caminho
```javascript
const path = require('path');
const caminho = path.join('pasta', 'subpasta', 'arquivo.txt');
console.log(caminho);
// "pasta/subpasta/arquivo.txt" (Linux/macOS)
// "pasta\subpasta\arquivo.txt" (Windows)
```

#### 🔹 `path.resolve()` → Resolve um caminho absoluto
```javascript
const caminhoAbsoluto = path.resolve('pasta', 'subpasta', 'arquivo.txt');
console.log(caminhoAbsoluto);
```

#### 🔹 `path.basename()` → Retorna o nome do arquivo
```javascript
console.log(path.basename('/caminho/para/arquivo.txt')); // "arquivo.txt"
```

#### 🔹 `path.dirname()` → Retorna o diretório do arquivo
```javascript
console.log(path.dirname('/caminho/para/arquivo.txt')); // "/caminho/para"
```

#### 🔹 `path.extname()` → Retorna a extensão do arquivo
```javascript
console.log(path.extname('/caminho/para/arquivo.txt')); // ".txt"
```

---

## 🚀 3. Módulo `fs`
O módulo `fs` (File System) permite manipular arquivos no Node.js.

### 📌 Ler Arquivo
```javascript
const fs = require('fs');
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

### 📌 Escrever em um Arquivo
```javascript
fs.writeFile('novoArquivo.txt', 'Conteúdo do arquivo', (err) => {
    if (err) throw err;
    console.log('Arquivo salvo!');
});
```

### 📌 Adicionar Conteúdo a um Arquivo
```javascript
fs.appendFile('novoArquivo.txt', '\nNova linha adicionada!', (err) => {
    if (err) throw err;
    console.log('Conteúdo adicionado!');
});
```

### 📌 Excluir Arquivo
```javascript
fs.unlink('novoArquivo.txt', (err) => {
    if (err) throw err;
    console.log('Arquivo deletado!');
});
```

### 📌 Criar Diretório
```javascript
fs.mkdir('novaPasta', (err) => {
    if (err) throw err;
    console.log('Pasta criada!');
});
```

### 📌 Remover Diretório
```javascript
fs.rmdir('novaPasta', (err) => {
    if (err) throw err;
    console.log('Pasta removida!');
});
```

---

## 🎯 Conclusão
- O **Roteamento de API** define como uma API recebe e responde a requisições.
- O **Módulo `path`** ajuda a manipular caminhos de arquivos de forma segura e multiplataforma.
- O **Módulo `fs`** permite ler, escrever e excluir arquivos e pastas.

Esses conceitos são fundamentais para o desenvolvimento de aplicações robustas no Node.js. 🚀
