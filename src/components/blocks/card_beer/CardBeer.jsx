import React from "react";
import { useSelector } from "react-redux";
import { selectBeerById } from "/src/features/beersSlice";

function CardBeer({ beerId }) {
  const beer = useSelector(state => selectBeerById(state, beerId));

  return(
    <li>
      <img src={beer.image_url} alt="beer" width={90} height={200} />
      <h2>{beer.name}</h2>
    </li>
  );
}

export default CardBeer;
