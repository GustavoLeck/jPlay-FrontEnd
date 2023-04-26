import { Campo, Container } from "./styles";

function CampoBusca({ Nome }) {
  return (
    <Container>
      {Nome} : <Campo name={Nome}></Campo>
    </Container>
  );
}
export default CampoBusca;
