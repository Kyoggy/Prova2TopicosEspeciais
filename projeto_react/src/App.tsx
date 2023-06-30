import React from "react";
import CadastroProduto from "./components/pages/CadastroProduto";
import ListarProdutos from "./components/pages/ListarProdutos";
import Nav from "./components/layout/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />

      <Outlet/>
     
    </div>
  );
}

export default App;