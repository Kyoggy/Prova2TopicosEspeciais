import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListarProdutos() {
  const [produtos, setProdutos] = useState([]);

  function carregarDados() {
    axios
      .get("http://localhost:3333")
      .then((resposta) => {
        setProdutos(resposta.data.dados);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  //Função de carregamento do componente
  //React Router DOM - https://www.youtube.com/watch?v=7b42lVMdEjE
  useEffect(() => {
    carregarDados();
  }, []);


  return (
    <div>
      <h1>Listagem de produtos</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto: any) => (
            <tr>
              <td>{produto.descricao}</td>
              <td>R$ {produto.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarProdutos;
