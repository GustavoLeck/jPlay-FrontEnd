import { Campo, Container, Texto } from "./styles";

function CampoBusca({ Nome }) {
  return (
    <Container>
      <Texto>{Nome}: </Texto>
      <Campo></Campo>
    </Container>
  );
}

export default CampoBusca;
