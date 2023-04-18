import { ContainerGeral, LinhaLista, ColunaLista } from "./styles";
import React from "react";

function ListaResultado({ valores }) {
  function generateString(lista) {
    let texto = "";
    lista.map((elemento) => {
      texto = elemento + ", " + texto;
    });
    return texto;
  }
  return (
    <ContainerGeral>
      <tbody>
        <LinhaLista>
          <ColunaLista>Musica</ColunaLista>
          <ColunaLista>Artista</ColunaLista>
          <ColunaLista>Ano</ColunaLista>
          <ColunaLista>Genero</ColunaLista>
          <ColunaLista>Estilos</ColunaLista>
          <ColunaLista>Album</ColunaLista>
        </LinhaLista>
        {valores.map((valor) => {
          return (
            <LinhaLista key={valor.id}>
              <ColunaLista>{valor.Musica}</ColunaLista>
              <ColunaLista>{valor.Artista}</ColunaLista>
              <ColunaLista>{valor.Ano}</ColunaLista>
              <ColunaLista>{generateString(valor.Generos)}</ColunaLista>
              <ColunaLista>{generateString(valor.Estilos)}</ColunaLista>
              <ColunaLista>Teste</ColunaLista>
            </LinhaLista>
          );
        })}
      </tbody>
    </ContainerGeral>
  );
}

export default ListaResultado;
