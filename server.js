import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "D.rosso07",
  database: "atletas",
});

app.post("/cadastrar", async (req, res) => {
  const { nome, posicao, idade, nascimento } = req.body;

  try {
    const [resultado] = await db.query(
      "INSERT INTO atleta (nome, posicao, idade, nascimento) VALUES (?, ?, ?, ?)",
      [nome, posicao, idade, nascimento],
    );

    res.status(201).json({
      mensagem: "Atleta cadastrado!",
      id: resultado.insertId,
    });
  } catch (erro) {
    console.log("ERRO NO MYSQL:", erro);
    res.status(500).json({ Erro: erro });
  }
});

app.delete("/deletar/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const [resultado] = await db.query("DELETE FROM atleta WHERE id = ?", [id]);
    console.log(resultado);

    res.status(200).json({ Mensagem: "deletado!" });
  } catch (erro) {
    console.log(erro);

    res.status(500).json({ erro: erro });
  }
});

app.listen(3000, () => console.log("Rodando..."));
