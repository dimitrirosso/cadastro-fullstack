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

let contadorAtletas = 0;

cadastrar.addEventListener("click", async (event) => {
  event.preventDefault();
  const tabela = document.querySelector("table");
  const nome = document.getElementById("nome");
  const posicao = document.getElementById("posicao");
  const idade = document.getElementById("idade");
  const nascimento = document.getElementById("nascimento");
  let numeroDeAtletas = document.querySelector("span");

  const atletas = {
    nome: nome.value,
    posicao: posicao.value,
    idade: idade.value,
    nascimento: nascimento.value,
  };

  try {
    const resposta = await fetch("http://localhost:3000/cadastrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(atletas),
    });

    const dados = await resposta.json();

    const linha = document.createElement("tr");
    linha.dataset.id = dados.id;

    linha.innerHTML = `
  <td>${dados.id}</td>
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
  } catch (erro) {
    console.log("Erro: ", erro);
  }
});

tabela.addEventListener("click", async (botao) => {
  if (botao.target.className.includes("botao__deletar")) {
    const linha = botao.target.closest("tr");
    const id = linha.dataset.id;
    console.log(id);

    const resposta = await fetch(`http://localhost:3000/deletar/${id}`, {
      method: "DELETE",
    });

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
