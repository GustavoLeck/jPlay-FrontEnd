import React, { useState, useEffect } from "react";

import ListaResultado from "../ListaResultado";

import {
  ContainerCampos,
  Botao,
  ContainerBotao,
  ContainerGeral,
} from "./styles";
import CampoBusca from "../CampoBusca";
import axios from "axios";

function FormularioBusca() {
  const [getMusicas, setMusicas] = React.useState([]);
  const [dataPesquisa, setPesquisa] = React.useState([]);
  const [dataContador, setContador] = React.useState(0);

  async function consultMusicas() {
    const response = await axios.get(`http://localhost:3050/api/musicas`, {
      body: {},
    });
    // console.log(response);
    setMusicas(response.data);
  }

  useEffect(() => {
    consultMusicas();
  }, []);

  return (
    <>
      <ContainerGeral>
        <ContainerCampos>
          <CampoBusca
            onEdit={() => {
              console.log(getMusicas);
            }}
            Nome="Nome"
          ></CampoBusca>
          <CampoBusca
            onChange={() => {
              console.log("Teste");
            }}
            Nome="Artista"
          ></CampoBusca>
          <CampoBusca Nome="Ano"></CampoBusca>
          <CampoBusca Nome="Genêro"></CampoBusca>
          <CampoBusca Nome="Estilo"></CampoBusca>
          <CampoBusca Nome="Álbum"></CampoBusca>
        </ContainerCampos>
        <ContainerBotao>
          <Botao
            onClick={() => {
              console.log(getMusicas);
            }}
          >
            Pesquisar!
          </Botao>
        </ContainerBotao>
      </ContainerGeral>
      <ListaResultado valores={getMusicas}></ListaResultado>
    </>
  );
}

export default FormularioBusca;
