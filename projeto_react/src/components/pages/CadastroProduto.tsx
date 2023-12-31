import axios from "axios";
import { useState } from "react";
import { Produto } from "../../models/produto.model";
import Button from "@mui/material/Button";

function CadastroProduto() {
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  function enviar() {
    //Enviar o produto para a API, através FETCH ou AXIOS
    let produto: Produto = new Produto();
    produto.descricao = descricao;
    produto.preco = Number.parseInt(preco);

    axios
      .post("http://localhost:3333", produto)
      .then((resposta) => {
        //Executar algo quando a requisição for bem sucedida
        //Códigos HTTP na faixa do 200
        //Redirecionar para o componente da listagem
        console.log(resposta.data.mensagem);
        setDescricao("");
        setPreco("");
      })
      .catch((erro) => {
        //Executar algo quando a requisição for mal sucedida
        //Códigos HTTP na faixa do 400 e 500
        console.log(erro);
      });
  }

  return (
    <div>
      <h1> Cadastrar Despesa</h1>
      <div>
        <label>Descricao:</label>
        <input
          type="text"
          onChange={(event: any) => setDescricao(event.target.value)}
        />
      </div>
      <div>
        <label>Valor:</label>
        <input
          type="text"
          onChange={(event: any) => setPreco(event.target.value)}
        />
      </div>
      <div>
        <Button variant="outlined" color="error" onClick={enviar}>
          Cadastrar
        </Button>
      </div>
    </div>
  );
}

export default CadastroProduto;