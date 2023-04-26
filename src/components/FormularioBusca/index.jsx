import React, { useState, useEffect, useRef, useContext } from "react";
import ListaResultado from "../ListaResultado";
import CampoBusca from "../CampoBusca";
import axios from "axios";

import { AppContext } from "../../AppContext";

import {
  ContainerCampos,
  Botao,
  ContainerBotao,
  ContainerGeral,
  Dropdown,
  ContainerLabel,
} from "./styles";

function FormularioBusca() {
  const { getMusicasFiltradas, setMusicasFiltradas, getResponse } =
    useContext(AppContext);

  const [getFiltro, setFiltro] = useState({});
  const [getContador, setContador] = useState(0);
  const valoresFiltro = useRef(null);

  async function consultMusicas() {
    const response = await axios.post(
      `http://localhost:3050/api/musicas`,
      getFiltro
    );
    console.log(getFiltro);
    setContador(response.data.QuantidadeMusica);
    setMusicasFiltradas(response.data.Musicas);
  }

  function handleFiltro() {
    let entity = {};
    let inputs = Array.from(valoresFiltro.current);
    inputs.map((e) => {
      if (e.value !== "") {
        setFiltro((entity[e.name] = e.value));
      }
    });
    setFiltro(entity);
  }

  function handleMouseOver() {
    console.log("Teste");
  }

  useEffect(() => {
    consultMusicas();
  }, []);

  useEffect(() => {
    consultMusicas();
  }, [getFiltro]);

  return (
    <>
      <ContainerGeral>
        <ContainerCampos ref={valoresFiltro}>
          <CampoBusca Nome="Musica"></CampoBusca>
          <CampoBusca Nome="Artista"></CampoBusca>
          <CampoBusca Nome="Ano"></CampoBusca>
          <ContainerLabel>
            Estrelas
            <Dropdown name="Estrela">
              Estrelas:
              <option>{""}</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Dropdown>
          </ContainerLabel>
        </ContainerCampos>
        <ContainerBotao>
          <Botao onMouseOver={handleMouseOver} onClick={handleFiltro}>
            Pesquisar!
          </Botao>
        </ContainerBotao>
      </ContainerGeral>
      <div>
        <h5>
          Musicas Encontradas:
          {" " + getContador}
        </h5>
      </div>
      <ListaResultado></ListaResultado>
    </>
  );
}

export default FormularioBusca;
