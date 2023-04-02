import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBeerById } from "../../api";
import { BeerName, DescritpionContainer, ImageContainer, Tagline, Wrapper } from "./style";
import Loader from "../Loader";

function BeerDetails() {
  const { beerId } = useParams();
  const { data: currentBeer, isLoading } = useQuery(['beer', beerId], () => {
    if (!beerId) {
      return null
    }
    return getBeerById(Number(beerId))
  })
  if (isLoading) {
    return <Loader /> 
  }
  if (!currentBeer) {
    return <p>sorry there is no such beer </p>
  }
  const beer = currentBeer[0];
  return (
    <Wrapper>
      <ImageContainer url={beer.image_url || '/assets/beer-avatar.png'} />
      <div>
        <BeerName>{beer.name}</BeerName>
        <Tagline>{beer.tagline}</Tagline>
        <DescritpionContainer>
          <p>description:</p>
          <p>{beer.description}</p>
        </DescritpionContainer>
        <DescritpionContainer>
          <p>ABV:</p>
          <p>{beer.abv + '%' || '-'}</p>
        </DescritpionContainer>
        <DescritpionContainer>
          <p>IBU</p>
          <p>{beer.ibu || '-'}</p>
        </DescritpionContainer>
        <DescritpionContainer>
          <p>Ingredients:</p>
          <div>
            <p>{'Malt: '}</p>
            <ul>{beer.ingredients.malt.map(malt => {
              return (
                <li>{malt.name}: {malt.amount.value}, {malt.amount.unit}</li>
              )
            })}</ul>
            <p>{'Hops: '}</p>
            <ul>{beer.ingredients.hops.map(hops => {
              return (
                <li>{hops.name}: {hops.amount.value}, {hops.amount.unit}</li>
              )
            })}</ul>
            <p>Yeast: <ul><li>{beer.ingredients.yeast}</li></ul></p>
          </div>
        </DescritpionContainer>
        <DescritpionContainer>
          <p>Try with:</p>
          <ul>{beer.food_pairing.map(food => {
            return (
              <li>{food}</li>
            )
          })}</ul>
        </DescritpionContainer>
        <DescritpionContainer>
          <p>Brewer tips:</p>
          <p>{beer.brewers_tips}</p>
        </DescritpionContainer>
      </div>
    </Wrapper>
  )
}

export default BeerDetails;