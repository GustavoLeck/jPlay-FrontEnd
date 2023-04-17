import { ContainerGeral, LinhaLista, ColunaLista } from "./styles";

function ListaResultado() {
  return (
    <ContainerGeral>
      <LinhaLista>
        <ColunaLista>Musica</ColunaLista>
        <ColunaLista>Artista</ColunaLista>
        <ColunaLista>Ano</ColunaLista>
        <ColunaLista>Genero</ColunaLista>
        <ColunaLista>Estilos</ColunaLista>
        <ColunaLista>Album</ColunaLista>
      </LinhaLista>
    </ContainerGeral>
  );
}

export default ListaResultado;
