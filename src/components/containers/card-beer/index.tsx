import React from "react";
import useAppSelector from "../../../hooks/use-selector";
import { selectBeerById } from "../../../features/beers-slice";
import { ButtonActive, Button } from "../../ui/button";
import * as S from "./style";

interface Props {
  beerId: number
}

interface Beer {
  image_url: string,
  name: string,
  isCart: boolean,
  abv: number,
  ibu: number
}

const CardBeer: React.FC<Props> = ({ beerId }: Props) => {
  const beer = useAppSelector(state => selectBeerById(state, beerId)) as Beer;

  let button;

  if(beer.isCart === true) {
    button = <ButtonActive beerId={beerId} />
  } else {
    button = <Button beerId={beerId} />
  }

  return(
    <>
      <S.LinkBeer to={`/beers/${beerId}`}>
        <S.ImgStyle src={beer.image_url} alt={beer.name} width={90} height={200} />
        <S.BeerTitle>{beer.name}</S.BeerTitle>
        <S.BeerAlc>Alc.: {beer.abv} %</S.BeerAlc>
        <S.BeerPrice>Price: {beer.ibu}$</S.BeerPrice>
      </S.LinkBeer>
      {button}
    </>
  );
}

export default CardBeer;
