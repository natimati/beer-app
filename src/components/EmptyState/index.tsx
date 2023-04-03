import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { Container } from "./style";
import { useQuery } from "@tanstack/react-query";
import { getRandomBeer } from "../../api";

function EmptyState() {
  const { data: randomBeer } = useQuery(['beer'], getRandomBeer);
  const navigate = useNavigate();

  const onRandomButtonClick = () => {
    if (randomBeer) {
      navigate(`/beer-details/${randomBeer[0].id}`)
    }
    return
  };
  return (
    <Container>
      <h2>Sorry, there is nothing to show here</h2>
      <div>
        <Button onButtonClick={onRandomButtonClick} position="center">
          See random beer
        </Button>
        <Button onButtonClick={() => navigate('/')} position="center">
          Start over
        </Button>
      </div>
    </Container>
  )
}

export default EmptyState;