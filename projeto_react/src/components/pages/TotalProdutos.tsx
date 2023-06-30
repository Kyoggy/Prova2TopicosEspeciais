import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TotalProdutos() {
  const [total, setTotal] = useState(0);
  const [media, setMedia] = useState(0);

  useEffect(() => {
    async function carregarDados() {
      try {
        const resposta = await axios.get("http://localhost:3333/total");
        setTotal(resposta.data.total);
        setMedia(resposta.data.media);
      } catch (erro) {
        console.log(erro);
      }
    }
    carregarDados();
  }, []);

  return (
    <div>
      <h1>Listagem de produtos</h1>
      <table>
        <thead>
          <tr>
            <th>Despesa</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total</td>
            <td>R$ {total}</td>
          </tr>
          <tr>
            <td>Média</td>
            <td>R$ {media}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TotalProdutos;