// import express from "express";

// const app = express();

// app.use(express.json());

// let resposta = [];

// app.get("/listar", (req, res) => {
//   res.status(200).json(resposta);
// });

// app.post("/add", (req, res) => {
//   resposta.push(req.body);
//   res.status(201).json({ mensagem: "adicionado!" });
// });

// app.put("/update/:id", (req, res) => {
//   let id = Number(req.params.id);
//   let jogadorID = resposta.findIndex((jogador) => jogador.id == id);

//   resposta[jogadorID] = req.body;

//   res.status(200).json({ mensagem: "Atualizado" });
// });

// app.delete("/delete/:id", (req, res) => {
//   let id = Number(req.params.id);
//   let jogadorID = resposta.findIndex((jogador) => jogador.id == id);

//   resposta.splice(jogadorID, 1);

//   res.status(200).json({ mensagem: "deletado!" });
// });

// app.listen(3000, () => console.log("rodando pnc..."));

const adiciona = document.querySelector(".adiciona__atleta");
const modal = document.querySelector(".modal");
const cancelar = document.querySelector(".cancelar");
const cadastrar = document.querySelector(".cadastrar");
const editar = document.querySelector(".botao__editar");
const tabela = document.querySelector("table");

adiciona.addEventListener("click", () => {
  modal.style.display = "block";
});

cancelar.addEventListener("click", () => {
  modal.style.display = "none";
});

let id = 1;
let contadorAtletas = 0;

cadastrar.addEventListener("click", (event) => {
  event.preventDefault();
  const tabela = document.querySelector("table");
  const nome = document.getElementById("nome");
  const posicao = document.getElementById("posicao");
  const idade = document.getElementById("idade");
  const nascimento = document.getElementById("nascimento");
  let numeroDeAtletas = document.querySelector("span");

  const linha = document.createElement("tr");

  linha.innerHTML = `
  <td>${id++}</td>
  <td>${nome.value}</td>
  <td>${posicao.value}</td>
  <td>${idade.value} </td>
  <td>${nascimento.value}</td>

  <td>
    <div class="acoes">
      <button class="botao__editar">Lapis</button>
      <button class="botao__deletar">Lixo</button>
    </div>
  </td>
  `;
  tabela.appendChild(linha);

  contadorAtletas++;
  numeroDeAtletas.innerHTML = `${contadorAtletas}`;
});

tabela.addEventListener("click", (botao) => {
  if (botao.target.className.includes("botao__deletar")) {
    const linha = botao.target.closest("tr");
    linha.remove();

    let numeroDeAtletas = document.querySelector("span");
    if (contadorAtletas == 0) {
      alert("Erro!");
    } else {
      contadorAtletas--;
      numeroDeAtletas.innerHTML = `${contadorAtletas}`;
    }
  }
});
