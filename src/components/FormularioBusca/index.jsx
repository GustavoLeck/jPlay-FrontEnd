import {
  ContainerCampos,
  Botao,
  ContainerBotao,
  ContainerGeral,
} from "./styles";
import CampoBusca from "../CampoBusca";

function FormularioBusca() {
  return (
    <ContainerGeral>
      <ContainerCampos>
        <CampoBusca Nome="Nome"></CampoBusca>
        <CampoBusca Nome="Artista"></CampoBusca>
        <CampoBusca Nome="Ano"></CampoBusca>
        <CampoBusca Nome="Genêro"></CampoBusca>
        <CampoBusca Nome="Estilo"></CampoBusca>
        <CampoBusca Nome="Álbum"></CampoBusca>
      </ContainerCampos>
      <ContainerBotao>
        <Botao>Pesquisar!</Botao>
      </ContainerBotao>
    </ContainerGeral>
  );
}

export default FormularioBusca;
