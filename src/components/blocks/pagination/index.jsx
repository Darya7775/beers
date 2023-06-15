import React from "react";
import * as S from "./style";

function Pagination({ count, onhandler, currentPage }) {

  const numberPages = Array.from({length: count}, (_, index) => index + 1);

  return(
    <S.PaginationContainer>
      <S.List>
        {numberPages.map(number => {
          if(number === currentPage) {
            return(<li key={number}>
                    <S.LinkActivePag to={`/page_${number}`} onClick={() => {onhandler(number)}}>{number}</S.LinkActivePag>
                  </li>);
          } else {
            return(<li key={number}>
                    <S.LinkPag to={`/page_${number}`} onClick={() => {onhandler(number)}}>{number}</S.LinkPag>
                  </li>);
          }
        })}
      </S.List>
    </S.PaginationContainer>
  );
}

export default Pagination;
