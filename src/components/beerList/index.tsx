import { useQuery } from "@tanstack/react-query";
import { getBeers } from "../../api";
import { BeerImage, BeerImageContainer, Container, DecoratorDiv,  Wrapper } from "./style";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../Loader";
import Pagination from "../Pagination";

function BeerList() {
  const [search] = useSearchParams();
  const navigate = useNavigate();
  const currentPage = search.get('page') || '1';


  const { data: beers, isLoading } = useQuery(["beers", currentPage], () => {
    
    return getBeers(currentPage)
  } );

  const onBeerClick = (id: number) => {
    navigate(`/beer-details/${id}`)
  } 

  if (isLoading) {
    return <Loader />
  }
  if (beers) {
    return (
      <>
        <Wrapper>
          {beers.map(beer => {
            return (
              <Container key={beer.id} onClick={() => onBeerClick(beer.id)}>
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
        <Pagination /> 
      </>
    )
  }
  return <></>
}

export default BeerList;