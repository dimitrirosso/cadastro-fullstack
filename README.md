# ⚽ Cadastro de Atletas

Projeto Full Stack desenvolvido para praticar a criação de um sistema de cadastro de atletas utilizando **HTML, CSS, JavaScript, Node.js, Express e MySQL**.

## 📌 Sobre o projeto

O sistema permite cadastrar atletas e visualizar os dados em uma tabela. Os registros são enviados para uma API criada com Node.js e armazenados em um banco de dados MySQL.

Atualmente, o projeto está sendo executado **localmente**.

## 🖥️ Preview

![Tela do sistema](img/tela)

## 🚀 Funcionalidades

- ✅ Cadastrar atletas
- ✅ Exibir atletas em uma tabela
- ✅ Armazenar os dados no MySQL
- ✅ Excluir atletas
- ✅ Atualizar a quantidade de atletas exibida
- 🚧 Editar atletas — em desenvolvimento
- 🚧 Hospedagem online — planejada

## 🛠️ Tecnologias utilizadas

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express
- CORS
- Dotenv

### Banco de dados

- MySQL
- MySQL2

## 📂 Estrutura do projeto

```text
├── img/
│   └── tela-cadastro.png
├── index.html
├── style.css
├── script.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
```

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/dimitrirosso/cadastro-fullstack.git
```

### 2. Entre na pasta

```bash
cd cadastro-atletas
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=seu_banco
```

### 5. Inicie o servidor

```bash
npm start
```

O backend será iniciado em:

```text
http://localhost:3000
```

### 6. Abra o frontend

Abra o `index.html` no navegador ou utilize uma extensão como o Live Server no VS Code.

## 📚 Objetivo

O objetivo do projeto é praticar conceitos de desenvolvimento Full Stack, principalmente:

- Comunicação entre frontend e backend utilizando `fetch`
- Criação de APIs com Express
- Métodos HTTP `POST` e `DELETE`
- Uso de parâmetros de rota com `req.params`
- Integração entre Node.js e MySQL
- Utilização de `async/await`
- Variáveis de ambiente com `.env`
- Manipulação do DOM com JavaScript

## 🔮 Próximos passos

- [ ] Implementar edição de atletas
- [ ] Criar listagem dos atletas diretamente do banco ao carregar a página
- [ ] Melhorar validações do formulário
- [ ] Hospedar o backend
- [ ] Hospedar o banco de dados
- [ ] Substituir `localhost` pela URL da API hospedada

## 👨‍💻 Autor

**Dimitri Rosso**

Projeto desenvolvido como parte dos estudos de **Análise e Desenvolvimento de Sistemas**.
