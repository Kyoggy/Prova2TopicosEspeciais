import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CadastroProduto from "./components/pages/CadastroProduto";
import ListarProdutos from "./components/pages/ListarProdutos";
import TotalProdutos from "./components/pages/TotalProdutos"; 
import Error from "./components/pages/Error";

const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <CadastroProduto />,
      },
      {
        path: "/cadastrar",
        element: <CadastroProduto />,
      },
      {
        path: "/listar",
        element: <ListarProdutos />,
      },
      {
        path: "/total",
        element: <TotalProdutos />,
      }
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);