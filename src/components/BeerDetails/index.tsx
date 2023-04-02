import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getBeerById, getRandomBeer } from "../../api";
import { BeerName, DescritpionContainer, ImageContainer, Tagline, Wrapper } from "./style";
import Loader from "../Loader";
import Button from "../Button";

function BeerDetails() {
  const { beerId } = useParams();
  const { data: currentBeer, isLoading } = useQuery(['beer', beerId], () => {
    if (!beerId) {
      return null
    }
    return getBeerById(Number(beerId))
  })
  const { data: randomBeer } = useQuery(['beer'], getRandomBeer);
  const navigate = useNavigate()

  const onRandomButtonClick = () => {
    if (randomBeer) {
      navigate(`/beer-details/${randomBeer[0].id}`)
    }
    return
  };

  const onNextBeerButtonClick = (id: number) => {
    navigate(`/beer-details/${id + 1}`)
  }

  if (isLoading) {
    return <Loader /> 
  }
  if (!currentBeer) {
    return <Button onButtonClick={onRandomButtonClick} buttonText="go to random beer" position="center" />
  }
  const beer = currentBeer[0];

  return (
    <>
    <Wrapper>
      <ImageContainer url={beer.image_url || '/assets/beer-avatar.png'} />
      <div>
        <BeerName>{beer.name}</BeerName>
        <Tagline>{beer.tagline}</Tagline>
        <DescritpionContainer>
          <h4>Description:</h4>
          <p>{beer.description}</p>
        </DescritpionContainer>
        <DescritpionContainer>
          <h4>ABV:</h4>
          <p>{beer.abv + '%' || '-'}</p>
        </DescritpionContainer>
        <DescritpionContainer>
          <h4>IBU</h4>
          <p>{beer.ibu || '-'}</p>
        </DescritpionContainer>
        <DescritpionContainer>
          <h4>Ingredients:</h4>
          <div>
            <p>{'Malt: '}</p>
            <ul>{beer.ingredients.malt.map(malt => {
              return (
                <li key={malt.name}>{malt.name}: {malt.amount.value}, {malt.amount.unit}</li>
              )
            })}</ul>
            <p>{'Hops: '}</p>
            <ul>{beer.ingredients.hops.map(hops => {
              return (
                <li key={hops.name}>{hops.name}: {hops.amount.value}, {hops.amount.unit}</li>
              )
            })}</ul>
            <p>Yeast:</p> <ul><li>{beer.ingredients.yeast}</li></ul>
          </div>
        </DescritpionContainer>
        <DescritpionContainer>
          <h4>Try with:</h4>
          <ul>{beer.food_pairing.map((food, index) => {
            return (
              <li key={index}>{food}</li>
            )
          })}</ul>
        </DescritpionContainer>
        <DescritpionContainer>
          <h4>Brewer tips:</h4>
          <p>{beer.brewers_tips}</p>
        </DescritpionContainer>
      </div>
      </Wrapper>
      <Button onButtonClick={() => onNextBeerButtonClick(beer.id)} buttonText="See next beer" position="flex-end" />
    </>
  )
}

export default BeerDetails;