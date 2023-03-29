import { useQuery } from "@tanstack/react-query";
import { getFirstTwelveBeers } from "../../api";
import { BeerImage, BeerImageContainer, Container, DecoratorDiv, Wrapper } from "./style";

function BeerList() {
  const { data: beers, isLoading } = useQuery(["beers"], getFirstTwelveBeers)
  console.log('isworking', beers)

  if (beers) {
    return (
      <>
        <Wrapper>
          {beers.map(beer => {
            return (
              <Container key={beer.id}>
                <BeerImageContainer>
                  <BeerImage src={beer.image_url} alt={beer.name} />
                </BeerImageContainer>
                <p>{beer.name}</p>
                <DecoratorDiv />
                <p>{beer.tagline}</p>
              </Container>
            )
          })}
        </Wrapper>
      </>
    )
  }
  return <></>
}

export default BeerList;