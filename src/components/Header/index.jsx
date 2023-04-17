import { Container, Logo, Titulo, ContainerTitulo } from "./styles";

function Header() {
  return (
    <Container>
      <Logo src="/logo.jpg"></Logo>
      <ContainerTitulo>
        <Titulo>JPlay, seu mundo em uma pesquisa!!</Titulo>
      </ContainerTitulo>
    </Container>
  );
}

export default Header;
