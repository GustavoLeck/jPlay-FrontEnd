import { ContainerGeral, LinhaLista, ColunaLista } from "./styles";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

function ListaResultado() {
  const { getMusicasFiltradas } = useContext(AppContext);

  function generateString(lista) {
    let texto = "";
    lista.map((elemento) => {
      texto = elemento + ", " + texto;
    });
    return texto;
  }

  function handleClick() {
    console.log(getMusicasFiltradas);
  }

  return (
    <ContainerGeral>
      <tbody>
        <LinhaLista>
          <ColunaLista onClick={handleClick}>Musica</ColunaLista>
          <ColunaLista>Artista</ColunaLista>
          <ColunaLista>Ano</ColunaLista>
          <ColunaLista>Genero</ColunaLista>
          <ColunaLista>Estilos</ColunaLista>
        </LinhaLista>
        {getMusicasFiltradas.map((musica) => {
          return (
            <LinhaLista key={musica.id}>
              <ColunaLista>{musica.Musica}</ColunaLista>
              <ColunaLista>{musica.Artista}</ColunaLista>
              <ColunaLista>{musica.Ano}</ColunaLista>
              <ColunaLista>{generateString(musica.Generos)}</ColunaLista>
              <ColunaLista>{generateString(musica.Estilos)}</ColunaLista>
            </LinhaLista>
          );
        })}
      </tbody>
    </ContainerGeral>
  );
}

export default ListaResultado;
