import React from "react";
import FormularioBusca from "./components/FormularioBusca";
import Header from "./components/Header";
import ListaResultado from "./components/ListaResultado";

function App() {
  return (
    <>
      <Header></Header>
      <FormularioBusca></FormularioBusca>
      <ListaResultado></ListaResultado>
    </>
  );
}

export default App;
